#!/usr/bin/env bash
# Resync the local `main` ref to origin/main at session start.
#
# Why this exists:
#
# Cloud sessions boot from a fixed filesystem snapshot. When that snapshot was
# built, the bootstrap created refs/heads/main from origin/main and nothing has
# moved it since, because every session restores the same image and a fix
# applied inside one session is gone by the next. Local main is therefore
# frozen at whatever origin/main was on snapshot build day.
#
# The visible symptom is worse than plain staleness. The clone is shallow, so
# once origin/main advances past the graft boundary the two tips share no
# reachable ancestor, git cannot compute a merge base, and it reports a
# fictional divergence ("ahead 168, behind 107") for a branch that is really a
# straight ancestor of origin/main. Merges are the operation that trips on it.
#
# This must stay fast and do NO network. SessionStart hooks block the session,
# and the bootstrap has already fetched origin/main before Claude Code starts,
# so the remote-tracking ref is current and there is nothing to fetch. An
# earlier version deepened the shallow clone here, which cost ~19s and ~335MB
# on every session start. Don't reintroduce that.
#
# Safety: never touches main while main is checked out, and never moves main
# when main holds commits origin/main does not have.
set -uo pipefail

cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --git-dir >/dev/null 2>&1 || exit 0

# Moving a checked-out branch would rewrite the working tree under the session.
[ "$(git symbolic-ref --quiet --short HEAD 2>/dev/null)" = "main" ] && exit 0
git show-ref --verify --quiet refs/heads/main || exit 0

local_main=$(git rev-parse refs/heads/main 2>/dev/null) || exit 0
remote_main=$(git rev-parse refs/remotes/origin/main 2>/dev/null) || exit 0
[ "$local_main" = "$remote_main" ] && exit 0

# Two cheap, local ways to establish that main holds nothing origin/main lacks.
# Either is conclusive on its own; neither touches the network.
#
#   1. Ancestry is provable from the objects already on disk.
#   2. main has never been advanced in this container. Its reflog holds only
#      the single "Created from refs/remotes/origin/main" line the bootstrap
#      wrote, so no session ever committed to it and nothing can be lost.
#      This is the case the shallow graft otherwise makes unprovable.
safe=no
if git merge-base --is-ancestor "$local_main" "$remote_main" 2>/dev/null; then
  safe=yes
elif [ "$(git reflog show main 2>/dev/null | wc -l)" -le 1 ]; then
  safe=yes
fi

if [ "$safe" = yes ]; then
  git branch -f main origin/main >/dev/null 2>&1 &&
    echo "Stale local main resynced ${local_main:0:8} -> ${remote_main:0:8}."
else
  echo "Local main ${local_main:0:8} holds commits origin/main lacks; left alone."
fi
exit 0
