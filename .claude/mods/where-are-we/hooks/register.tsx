import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Card } from '../types'

const EMPTY: Card = { done: [], doing: [], waiting: [], updatedAt: null }
const card = atom({ plugin: 'where-are-we', key: 'card' } as const, EMPTY)

// The card lives in a plain JSON file in the project, written by the model
// with its ordinary Write or Edit tool. A tool registered through
// $.tool.register would be cleaner, but on Windows that tool's loopback MCP
// server answers its first request and garbles every one after it
// (InvalidHTTPResponse on tools/list), so the tool never reaches the session.
// Reported to Anthropic 2026-10-03; until it is fixed, the file is the channel.
const FILE = '.where-are-we.json'
// The tracked, human-readable copy, written only when the owner asks.
const SNAPSHOT = 'WHERE_ARE_WE.md'
const MAX_DONE = 30
const SHOWN_DONE = 4

const list = (v: unknown) =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string' && x.trim() !== '').map(x => x.trim()) : []

// Forward slashes, no trailing slash: Windows paths arrive either way.
const slashes = (p: string) => {
  const s = p.split('\\').join('/')
  return s.endsWith('/') ? s.slice(0, -1) : s
}
const norm = (p: string) => slashes(p).toLowerCase()

// One card per repository, not per folder: a session in a git worktree
// (bf-store, .claude/worktrees/...) uses the main checkout's card, so every
// branch in flight lands on the same list. A worktree's `.git` is a file
// reading `gitdir: <main>/.git/worktrees/<name>`; the main checkout's is a
// directory, which fs.read rejects, and then the session root is the answer.
let cached: string | undefined

async function cardPath($: EngineInterface) {
  if (cached) return cached
  const root = slashes(await $.session.root())
  let home = root
  try {
    const line = (await $.fs.read(`${root}/.git`)).trim()
    const gitdir = line.startsWith('gitdir:') ? slashes(line.slice('gitdir:'.length).trim()) : ''
    const at = gitdir.indexOf('/.git/worktrees/')
    if (at > 0) home = gitdir.slice(0, at)
  } catch {
    home = root
  }
  cached = `${home}/${FILE}`
  return cached
}

async function isCardWrite($: EngineInterface, filePath: string, ran: { deny?: unknown; isError?: boolean }) {
  return norm(filePath) === norm(await cardPath($)) && ran.deny === undefined && ran.isError !== true
}

function parse(text: string): Card {
  const raw = JSON.parse(text) as Record<string, unknown>
  return {
    done: list(raw.done).slice(-MAX_DONE),
    doing: list(raw.doing),
    waiting: list(raw.waiting),
    updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : null,
  }
}

// The owner's clock is US Eastern; written bare, no zone label.
function stamp(ms: number) {
  try {
    const opts = { timeZone: 'America/New_York' } as const
    const day = (d: Date) => d.toLocaleDateString('en-US', opts)
    const at = new Date(ms)
    const time = at.toLocaleTimeString('en-US', { ...opts, hour: 'numeric', minute: '2-digit' })
    return day(at) === day(new Date()) ? time : `${at.toLocaleDateString('en-US', { ...opts, month: 'short', day: 'numeric' })}, ${time}`
  } catch {
    return ''
  }
}

// A missing or unreadable file is an empty card, never a failed session.
async function load($: EngineInterface, stampNow = false) {
  let next = EMPTY
  try {
    next = parse(await $.fs.read(await cardPath($)))
  } catch {
    next = EMPTY
  }
  if (stampNow) next = { ...next, updatedAt: await $.clock.now() }
  await update($, card, () => next)
}

// The buttons write the file too, so it stays the one source of truth.
async function save($: EngineInterface, fn: (c: Card) => Card) {
  const now = await $.clock.now()
  let next = EMPTY
  await update($, card, c => {
    next = { ...fn(c), updatedAt: now }
    return next
  })
  await $.fs.write(await cardPath($), `${JSON.stringify(next, null, 2)}\n`)
}

function summary(c: Card, path: string) {
  const line = (items: string[]) => (items.length ? items.join('; ') : 'nothing')
  return [
    'Where-are-we card (shown to the owner above the prompt, saved across sessions):',
    `Done: ${line(c.done.slice(-8))}`,
    `In progress: ${line(c.doing)}`,
    `Waiting on owner's OK: ${line(c.waiting)}`,
    `Keep it current by writing ${path} with the Write tool whenever an item starts, finishes, or comes to need`,
    'the owner\'s OK (Fable reviews, merges, pushes to main, anything you must not start unasked).',
    'The file is JSON: {"done": [...], "doing": [...], "waiting": [...]}, each list complete (done oldest first),',
    'items short noun phrases under 60 characters, no em or en dashes. Write the whole file each time.',
    `The card file is untracked; ${SNAPSHOT} beside it is its tracked snapshot, changed only on request.`,
    `"Save the card to git": write ${SNAPSHOT} from the card (Done, In progress, Waiting on your OK, and a`,
    '"Saved <date time, US Eastern>" line), commit only that file on main with [CI Skip] in the message, push main.',
    `"Load the card from git": pull, then write the card file from ${SNAPSHOT}.`,
    'When a branch\'s work is finished and it changes what the site builds (not only docs or mods), ask the owner',
    `whether to refresh ${SNAPSHOT} on that branch from the card before it merges. On a merge conflict in`,
    `${SNAPSHOT}, regenerate it from the card rather than merging the two lists by hand.`,
  ].join('\n')
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await load($)
    return next(e)
  })

  on('prompt.submit', async ($, e, next) => {
    const c = await read($, card)
    return next({ ...e, context: [...(e.context ?? []), summary(c, await cardPath($))] })
  })

  // After a successful Write or Edit of the card file, redraw from the file.
  on('tool.call', { tool: 'Write' }, async ($, e, next) => {
    const ran = await next(e)
    if (await isCardWrite($, e.file_path, ran)) await load($, true)
    return ran
  })

  on('tool.call', { tool: 'Edit' }, async ($, e, next) => {
    const ran = await next(e)
    if (await isCardWrite($, e.file_path, ran)) await load($, true)
    return ran
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const c = await read($, card)
    const below = await next(e)
    const isEmpty = c.done.length + c.doing.length + c.waiting.length === 0

    if (e.props.hasSurvey || isEmpty) {
      return below
    }

    const { Box, Button, Text } = $.ui.resolve(e)
    const earlier = c.done.length - SHOWN_DONE
    const when = c.updatedAt === null ? '' : stamp(c.updatedAt)

    const section = (label: string, color: string, items: string[], mark: string) =>
      items.length === 0 ? null : (
        <Box key={label} flexDirection="column">
          <Text color={color} bold>
            {label}
          </Text>
          {items.map((item, i) => (
            <Text key={`${label}${i}`} wrap="truncate-end">
              {'  '}
              {mark} {item}
            </Text>
          ))}
        </Box>
      )

    const mine = (
      <Box flexDirection="column" borderStyle="round" borderColor="magenta" paddingX={1}>
        <Box>
          <Text color="magenta" bold>
            Where are we{' '}
          </Text>
          <Text dimColor>{when ? `updated ${when} ` : ''}</Text>
          <Button key="clear-done" label="Clear done" onPress={() => save($, x => ({ ...x, done: [] }))} />
          <Text> </Text>
          <Button key="reset" label="Reset" onPress={() => save($, () => EMPTY)} />
        </Box>
        {earlier > 0 ? <Text dimColor>  +{earlier} done earlier</Text> : null}
        {section('Done', 'green', c.done.slice(-SHOWN_DONE), '✓')}
        {section('In progress', 'blue', c.doing, '›')}
        {section('Waiting on your OK', 'red', c.waiting, '?')}
      </Box>
    )

    return below ? (
      <Box flexDirection="column">
        {mine}
        {below}
      </Box>
    ) : (
      mine
    )
  })
}
