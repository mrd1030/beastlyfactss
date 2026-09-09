#!/usr/bin/env bash
# Resync the local `main` ref to origin/main at session start.
#
# Why this exists:
#
# Cloud sessions boot from a fixed filesystem snapshot. When that snapshot was
# built, the bootstrap ran `git fetch --depth 50 origin refs/heads/main` and
# then created refs/heads/main from it. Nothing has moved that ref since, and
# nothing can: every session restores the same image, so a fix applied inside
# one session is gone by the next. Local main is therefore frozen at whatever
# origin/main was on snapshot build day, forever.
#
# The visible symptom is worse than plain staleness. Because the clone is
# shallow, once origin/main advances past the graft boundary the two tips share
# no reachable ancestor, so git cannot compute a merge base and reports a
# fictional divergence ("ahead 168, behind 107") for a branch that is really a
# straight ancestor of origin/main. It reads like two unrelated histories.
#
# Running here, after the snapshot restore and after the session's checkout, is
# the only place a durable fix can live.
#
# Safety: never touches main while main is checked out, and never moves main
# when main holds commits origin/main does not have.
set -uo pipefail

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --git-dir >/dev/null 2>&1 || exit 0

# Moving a checked-out branch would rewrite the working tree under the session.
[ "$(git symbolic-ref --quiet --short HEAD 2>/dev/null)" = "main" ] && exit 0
git show-ref --verify --quiet refs/heads/main || exit 0

git_dir=$(git rev-parse --git-dir)

# Ancestry has to be decided against real history, not a shallow graft, or the
# safety check below reads "unrelated" and refuses to do anything. Depth 1000
# covers normal drift cheaply; fall back to full history only if it does not.
if [ -f "$git_dir/shallow" ]; then
  git fetch --no-progress --quiet --depth 1000 origin main 2>/dev/null || exit 0
else
  git fetch --no-progress --quiet origin main 2>/dev/null || exit 0
fi

local_main=$(git rev-parse refs/heads/main 2>/dev/null) || exit 0
remote_main=$(git rev-parse refs/remotes/origin/main 2>/dev/null) || exit 0
[ "$local_main" = "$remote_main" ] && exit 0

if ! git merge-base --is-ancestor "$local_main" "$remote_main" 2>/dev/null; then
  if [ -f "$git_dir/shallow" ]; then
    git fetch --no-progress --quiet --unshallow origin main 2>/dev/null ||
      git fetch --no-progress --quiet --depth 100000 origin main 2>/dev/null
  fi
fi

if git merge-base --is-ancestor "$local_main" "$remote_main" 2>/dev/null; then
  git branch -f main origin/main >/dev/null 2>&1 &&
    echo "Stale local main resynced ${local_main:0:8} -> ${remote_main:0:8}."
else
  echo "Local main ${local_main:0:8} holds commits origin/main lacks; left alone."
fi
exit 0
