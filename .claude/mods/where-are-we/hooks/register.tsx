import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Archived, Card, Ledger } from '../types'

const EMPTY: Card = { done: [], doing: [], waiting: [], updatedAt: null }
const EMPTY_LEDGER: Ledger = { doneAt: {}, archived: [], undo: null }
const card = atom({ plugin: 'where-are-we', key: 'card' } as const, EMPTY)
const ledger = atom({ plugin: 'where-are-we', key: 'ledger' } as const, EMPTY_LEDGER)
const picked = atom({ plugin: 'where-are-we', key: 'picked' } as const, [] as string[])

// The card lives in a plain JSON file in the project, written by the model
// with its ordinary Write or Edit tool. A tool registered through
// $.tool.register would be cleaner, but on Windows that tool's loopback MCP
// server answers its first request and garbles every one after it
// (InvalidHTTPResponse on tools/list), so the tool never reaches the session.
// Reported to Anthropic 2026-10-03; until it is fixed, the file is the channel.
const FILE = '.where-are-we.json'
// The mod's own file beside it: when each Done item first appeared, the
// archived tasks, and what Undo puts back. Untracked like the card, so a
// button press never touches git or lands on whichever branch is checked out.
const LEDGER_FILE = '.where-are-we-archive.json'
// The tracked, human-readable copies, written only when the owner asks.
const SNAPSHOT = 'WHERE_ARE_WE.md'
const ARCHIVE_DOC = 'archive/docs-completed/WHERE_ARE_WE_COMPLETED_<YYYY-MM-DD>.md'
const MAX_DONE = 30
const SHOWN_DONE = 8

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
let home: string | undefined

async function homeDir($: EngineInterface) {
  if (home) return home
  const root = slashes(await $.session.root())
  let found = root
  try {
    const line = (await $.fs.read(`${root}/.git`)).trim()
    const gitdir = line.startsWith('gitdir:') ? slashes(line.slice('gitdir:'.length).trim()) : ''
    const at = gitdir.indexOf('/.git/worktrees/')
    if (at > 0) found = gitdir.slice(0, at)
  } catch {
    found = root
  }
  home = found
  return home
}

const cardPath = async ($: EngineInterface) => `${await homeDir($)}/${FILE}`
const ledgerPath = async ($: EngineInterface) => `${await homeDir($)}/${LEDGER_FILE}`

async function isCardWrite($: EngineInterface, filePath: string, ran: { deny?: unknown; isError?: boolean }) {
  return norm(filePath) === norm(await cardPath($)) && ran.deny === undefined && ran.isError !== true
}

function parseCard(text: string): Card {
  const raw = JSON.parse(text) as Record<string, unknown>
  return {
    done: list(raw.done).slice(-MAX_DONE),
    doing: list(raw.doing),
    waiting: list(raw.waiting),
    updatedAt: typeof raw.updatedAt === 'number' ? raw.updatedAt : null,
  }
}

function parseDoneAt(v: unknown): Record<string, number> {
  const out: Record<string, number> = {}
  if (v && typeof v === 'object') {
    for (const [k, n] of Object.entries(v as Record<string, unknown>)) if (typeof n === 'number') out[k] = n
  }
  return out
}

function parseArchived(v: unknown): Archived[] {
  if (!Array.isArray(v)) return []
  return v.flatMap(x => {
    const a = x as Record<string, unknown>
    if (typeof a?.text !== 'string' || typeof a.archivedAt !== 'number') return []
    return [{
      text: a.text,
      doneAt: typeof a.doneAt === 'number' ? a.doneAt : null,
      archivedAt: a.archivedAt,
      doneAtText: typeof a.doneAtText === 'string' ? a.doneAtText : 'unknown',
      archivedAtText: typeof a.archivedAtText === 'string' ? a.archivedAtText : full(a.archivedAt),
    }]
  })
}

function parseLedger(text: string): Ledger {
  const raw = JSON.parse(text) as Record<string, unknown>
  const u = raw.undo as Record<string, unknown> | null | undefined
  return {
    doneAt: parseDoneAt(raw.doneAt),
    archived: parseArchived(raw.archived),
    undo: u && typeof u === 'object' && u.card
      ? { card: parseCard(JSON.stringify(u.card)), doneAt: parseDoneAt(u.doneAt), archived: parseArchived(u.archived) }
      : null,
  }
}

const EASTERN = { timeZone: 'America/New_York' } as const

// The owner's clock is US Eastern; written bare, no zone label.
function stamp(ms: number) {
  try {
    const day = (d: Date) => d.toLocaleDateString('en-US', EASTERN)
    const at = new Date(ms)
    const time = at.toLocaleTimeString('en-US', { ...EASTERN, hour: 'numeric', minute: '2-digit' })
    return day(at) === day(new Date()) ? time : `${at.toLocaleDateString('en-US', { ...EASTERN, month: 'short', day: 'numeric' })}, ${time}`
  } catch {
    return ''
  }
}

// A full date and time for the archive, "Oct 3, 2026, 7:41 PM".
function full(ms: number) {
  try {
    const at = new Date(ms)
    const date = at.toLocaleDateString('en-US', { ...EASTERN, month: 'short', day: 'numeric', year: 'numeric' })
    const time = at.toLocaleTimeString('en-US', { ...EASTERN, hour: 'numeric', minute: '2-digit' })
    return `${date}, ${time}`
  } catch {
    return String(ms)
  }
}

async function readOr<T>($: EngineInterface, path: string, parse: (t: string) => T, fallback: T) {
  try {
    return parse(await $.fs.read(path))
  } catch {
    return fallback
  }
}

// Reads both files. Archived text stays off Done, and every Done item gets
// the time it was first seen there, which is what the archive records as
// "done". A missing or unreadable file is empty, never a failed session.
async function load($: EngineInterface, fromWrite = false) {
  const now = await $.clock.now()
  let c = await readOr($, await cardPath($), parseCard, EMPTY)
  const l = await readOr($, await ledgerPath($), parseLedger, EMPTY_LEDGER)

  const gone = new Set(l.archived.map(a => a.text))
  c = { ...c, done: c.done.filter(t => !gone.has(t)) }
  if (fromWrite) c = { ...c, updatedAt: now }

  const firstSeen = fromWrite ? now : (c.updatedAt ?? now)
  const doneAt: Record<string, number> = {}
  for (const t of c.done) doneAt[t] = l.doneAt[t] ?? firstSeen
  const isChanged =
    Object.keys(doneAt).length !== Object.keys(l.doneAt).length || c.done.some(t => l.doneAt[t] === undefined)
  const nextLedger = { ...l, doneAt }
  if (isChanged) await $.fs.write(await ledgerPath($), `${JSON.stringify(nextLedger, null, 2)}\n`)

  await update($, card, () => c)
  await update($, ledger, () => nextLedger)
  await update($, picked, p => p.filter(t => c.done.includes(t)))
}

// The buttons write both files, so they stay the one source of truth.
async function commit($: EngineInterface, c: Card, l: Ledger) {
  await $.fs.write(await cardPath($), `${JSON.stringify(c, null, 2)}\n`)
  await $.fs.write(await ledgerPath($), `${JSON.stringify(l, null, 2)}\n`)
  await update($, card, () => c)
  await update($, ledger, () => l)
  await update($, picked, p => p.filter(t => c.done.includes(t)))
}

async function archive($: EngineInterface, which: 'picked' | 'all') {
  const c = await read($, card)
  const l = await read($, ledger)
  const p = await read($, picked)
  const chosen = which === 'all' ? c.done : c.done.filter(t => p.includes(t))
  if (chosen.length === 0) return

  const now = await $.clock.now()
  const entries: Archived[] = chosen.map(text => {
    const at = l.doneAt[text] ?? null
    return { text, doneAt: at, archivedAt: now, doneAtText: at === null ? 'unknown' : full(at), archivedAtText: full(now) }
  })
  const doneAt = { ...l.doneAt }
  for (const t of chosen) delete doneAt[t]

  await commit(
    $,
    { ...c, done: c.done.filter(t => !chosen.includes(t)), updatedAt: now },
    { doneAt, archived: [...l.archived, ...entries], undo: { card: c, doneAt: l.doneAt, archived: l.archived } },
  )
  await update($, picked, () => [])
  await $.ui.toast(`Archived ${chosen.length} ${chosen.length === 1 ? 'task' : 'tasks'}. Undo is on the card.`)
}

async function reset($: EngineInterface) {
  const c = await read($, card)
  const l = await read($, ledger)
  const now = await $.clock.now()
  await commit($, { ...EMPTY, updatedAt: now }, {
    doneAt: {},
    archived: l.archived,
    undo: { card: c, doneAt: l.doneAt, archived: l.archived },
  })
  await $.ui.toast('Card cleared. Undo is on the card.')
}

async function undo($: EngineInterface) {
  const l = await read($, ledger)
  if (!l.undo) return
  const now = await $.clock.now()
  await commit($, { ...l.undo.card, updatedAt: now }, { doneAt: l.undo.doneAt, archived: l.undo.archived, undo: null })
}

function summary(c: Card, path: string, archivePath: string) {
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
    `The owner archives Done items with the card's buttons; the mod keeps them in ${archivePath} (never edit it).`,
    'An archived item never goes back on the card or into the snapshot; repeat work gets a distinct name.',
    `Both files are untracked. ${SNAPSHOT} is the card's tracked snapshot and ${ARCHIVE_DOC}`,
    '(one file; create it with today\'s date only if none exists) is the archive\'s; both change only on request.',
    `Both are only ever COMBINED, never overwritten: add what is missing, drop nothing. In ${SNAPSHOT}, an item`,
    'in two states takes Done over In progress over Waiting, archived items are left out, and the newer',
    '"Saved <date time, US Eastern>" line is kept. Sections: Done, In progress, Waiting on your OK.',
    'In the archive doc, batches go newest first, each headed by its archivedAtText, one line per task:',
    '"<task> (done <doneAtText>)"; skip a task already listed in the same batch.',
    `"Save the card to git": combine the card into ${SNAPSHOT} and the archive file into the archive doc, commit`,
    'only those two files on main with [CI Skip] in the message, push main.',
    `"Load the card from git": pull, then combine ${SNAPSHOT} into the card file.`,
    'When a branch\'s work is finished and it changes what the site builds (not only docs or mods), ask the owner',
    `whether to combine the card into ${SNAPSHOT} on that branch before it merges. A merge conflict in either`,
    'tracked file is resolved the same way: combine both sides, drop nothing.',
  ].join('\n')
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await load($)
    return next(e)
  })

  on('prompt.submit', async ($, e, next) => {
    const c = await read($, card)
    return next({ ...e, context: [...(e.context ?? []), summary(c, await cardPath($), await ledgerPath($))] })
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
    const l = await read($, ledger)
    const p = await read($, picked)
    const below = await next(e)
    const hasItems = c.done.length + c.doing.length + c.waiting.length > 0

    // An empty card still shows while Undo can bring something back.
    if (e.props.hasSurvey || (!hasItems && !l.undo)) {
      return below
    }

    const { Box, Button, Text } = $.ui.resolve(e)
    const shown = c.done.slice(-SHOWN_DONE)
    const earlier = c.done.length - shown.length
    const when = c.updatedAt === null ? '' : stamp(c.updatedAt)
    const toggle = (t: string) => update($, picked, x => (x.includes(t) ? x.filter(y => y !== t) : [...x, t]))

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

    // Done rows are checkboxes: press one to tick it, then Archive the ticked.
    const done =
      shown.length === 0 ? null : (
        <Box key="Done" flexDirection="column">
          <Text color="green" bold>
            Done
          </Text>
          {earlier > 0 ? <Text dimColor>  +{earlier} done earlier (Archive all done takes them too)</Text> : null}
          {shown.map((item, i) => (
            <Box key={`done${i}`}>
              <Text>  </Text>
              <Button
                key={`pick${i}`}
                plain
                label={`${p.includes(item) ? '☑' : '☐'} ${item}`}
                onPress={() => toggle(item)}
              />
            </Box>
          ))}
        </Box>
      )

    const gap = (k: string) => <Text key={k}> </Text>

    const mine = (
      <Box flexDirection="column" borderStyle="round" borderColor="magenta" paddingX={1}>
        <Box>
          <Text color="magenta" bold>
            Where are we{' '}
          </Text>
          <Text dimColor>{when ? `updated ${when} ` : ''}</Text>
          {p.length > 0 ? (
            <Button key="archive-picked" variant="primary" label={`Archive ${p.length}`} onPress={() => archive($, 'picked')} />
          ) : null}
          {p.length > 0 ? gap('g1') : null}
          {c.done.length > 0 ? (
            <Button key="archive-all" label="Archive all done" onPress={() => archive($, 'all')} />
          ) : null}
          {c.done.length > 0 ? gap('g2') : null}
          {hasItems ? <Button key="reset" label="Reset" onPress={() => reset($)} /> : null}
          {hasItems && l.undo ? gap('g3') : null}
          {l.undo ? <Button key="undo" label="Undo" onPress={() => undo($)} /> : null}
        </Box>
        {done}
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
