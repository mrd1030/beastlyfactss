#!/usr/bin/env bash
# Install node_modules at session start in cloud sessions.
#
# Why this exists: the cloud snapshot ships without node_modules, so eslint,
# sync-articles.js (needs the yaml package) and anything else that imports a
# dependency failed silently until someone noticed and ran npm ci by hand.
#
# Idempotent: skips the install when node_modules already matches the
# lockfile, so a resumed session pays nothing. Web only, so a local checkout
# is never touched. Synchronous, so the session cannot start ahead of it.
set -uo pipefail

[ "${CLAUDE_CODE_REMOTE:-}" = "true" ] || exit 0
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
[ -f package-lock.json ] || exit 0

stamp=node_modules/.package-lock.stamp
if [ -d node_modules ] && [ -f "$stamp" ] && cmp -s "$stamp" package-lock.json; then
  exit 0
fi

echo "Installing npm dependencies..."
# npm install rewrites the committed lockfile (it is out of sync on picomatch,
# so npm ci refuses it), which left a dirty package-lock.json in every session
# and, once reverted, a stamp mismatch that reinstalled on every resume. Put
# the committed file back and stamp that, so the tree stays clean and a resume
# skips the install.
lock_backup=$(mktemp)
cp package-lock.json "$lock_backup"
if npm install --no-audit --no-fund --loglevel=error; then
  cp "$lock_backup" package-lock.json
  cp package-lock.json "$stamp"
  echo "npm dependencies installed."
else
  cp "$lock_backup" package-lock.json
  echo "npm install failed; eslint and sync-articles will not work until it is rerun."
fi
rm -f "$lock_backup"
exit 0
