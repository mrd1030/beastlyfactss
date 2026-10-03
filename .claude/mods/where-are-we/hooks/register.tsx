import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Card } from '../types'

const EMPTY: Card = { done: [], doing: [], waiting: [], updatedAt: null }
const card = atom({ plugin: 'where-are-we', key: 'card' } as const, EMPTY)

const TOOL = 'mcp__where-are-we__update_card'
const MAX_DONE = 30
const SHOWN_DONE = 4

const DESCRIPTION = [
  'Updates the Where-are-we card the owner sees above the prompt. It is saved per project across sessions,',
  'so a fresh session after a usage-limit handoff picks it up. Call it whenever an item starts, finishes,',
  'or comes to need the owner\'s OK (Fable reviews, merges, pushes to main, anything you must not start unasked).',
  'Each section you pass replaces that section whole, so send the full list for it; omit a section to keep it.',
  'Items are short noun phrases (under 60 characters), no em or en dashes.',
].join(' ')

const SCHEMA = {
  type: 'object',
  properties: {
    done: { type: 'array', items: { type: 'string' }, description: 'Finished items, oldest first.' },
    doing: { type: 'array', items: { type: 'string' }, description: 'Items in progress now.' },
    waiting: { type: 'array', items: { type: 'string' }, description: 'Items waiting on the owner\'s OK.' },
  },
  additionalProperties: false,
}

const list = (v: unknown) =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string' && x.trim() !== '').map(x => x.trim()) : undefined

const keyFor = (root: string) => `card:${root.replace(/\\/g, '/').toLowerCase()}`

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

async function load($: EngineInterface) {
  const saved = (await $.store.get(keyFor(await $.session.root()))) as Card | undefined
  await update($, card, () => ({ ...EMPTY, ...(saved ?? {}) }))
}

async function save($: EngineInterface, fn: (c: Card) => Card) {
  const now = await $.clock.now()
  let next = EMPTY
  await update($, card, c => {
    next = { ...fn(c), updatedAt: now }
    return next
  })
  await $.store.set(keyFor(await $.session.root()), next)
}

function summary(c: Card) {
  const line = (items: string[]) => (items.length ? items.join('; ') : 'nothing')
  return [
    'Where-are-we card (shown to the owner above the prompt, saved across sessions):',
    `Done: ${line(c.done.slice(-8))}`,
    `In progress: ${line(c.doing)}`,
    `Waiting on owner's OK: ${line(c.waiting)}`,
    `Keep it current with ${TOOL} as items start, finish, or need the owner's OK.`,
  ].join('\n')
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await load($)
    await $.tool.register({ name: 'update_card', description: DESCRIPTION, inputSchema: SCHEMA })
    return next(e)
  })

  on('prompt.submit', async ($, e, next) => {
    const c = await read($, card)
    return next({ ...e, context: [...(e.context ?? []), summary(c)] })
  })

  on('tool.call', { tool: TOOL }, async ($, e) => {
    const args = e as unknown as Record<string, unknown>
    const done = list(args.done)
    const doing = list(args.doing)
    const waiting = list(args.waiting)

    await save($, c => ({
      ...c,
      done: (done ?? c.done).slice(-MAX_DONE),
      doing: doing ?? c.doing,
      waiting: waiting ?? c.waiting,
    }))

    return { result: 'Card updated.' }
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
