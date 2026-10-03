import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import type { Flag } from '../types'

const flags = atom({ plugin: 'zookeeper', key: 'flags' } as const, [])

const MAX_FLAGS = 20
const SHOWN = 4

// Pattern checks only. Each returns zero or more { rule, detail } hits for a
// piece of text that was just added (not text the edit merely kept).

type Hit = { rule: string; detail: string }

const snip = (text: string, index: number, length: number) =>
  text
    .slice(Math.max(0, index - 25), index + length + 25)
    .replace(/\s+/g, ' ')
    .trim()

const norm = (path: string) => path.replace(/\\/g, '/')
const short = (path: string) => norm(path).split('/').slice(-2).join('/')

const isProse = (path: string) =>
  /\.mdx?$/i.test(path) || /\/src\/lib\/data\//.test(norm(path))
const isContent = (path: string) => /\/content\/.*\.mdx?$/i.test(norm(path))

// Lines a legal statute quote or SEO tag lives on are exempt.
const STATUTE = /§|^\s*>|\b(U\.S\.C|C\.F\.R|Stat|Rev|Admin|Ann|Code|Regs?)\b\.?\s*(§|\d|ch\.|tit)/i
const SEO_LINE = /^\s*["']?(keywords|seo\w*|meta\w*|tags|ogTitle|ogDescription)["']?\s*[:=]/i

const BRITISH: [RegExp, string][] = [
  [/\b(colour|behaviour|favourite|flavour|harbour|honour|humour|labour|neighbour|odour|rumour|savour|vapour|armour|endeavour|parlour|vigour|splendour)(s|ed|ing|ite|ites|al|ally)?\b/gi, '-our'],
  [/\b(centre|fibre|litre|metre|theatre|calibre|sabre|spectre|lustre|meagre|sombre)s?\b/gi, '-re'],
  [/\b(organis|recognis|realis|apologis|minimis|maximis|optimis|prioritis|socialis|specialis|categoris|customis|emphasis|stabilis|sterilis|immobilis|summaris|utilis|visualis|characteris|criticis|memoris|sanitis|neutralis|fertilis)(e|es|ed|ing|ation|ations|er|ers)\b/gi, '-ise'],
  [/\b(analys|paralys|catalys)(e|es|ed|ing)\b/gi, '-yse'],
  [/\b(aluminium|catalogue|programme|jewellery|mould|moult|moulting|plough|sceptical|tyre|kerb|pyjamas|enrol|fulfil|licence|defence|offence|pretence|grey|greys|greyish|travelled|travelling|traveller|modelled|modelling|labelled|labelling|cancelled|cancelling|levelled|fuelled|signalled|counselling|marvellous|oesophag\w*|haemo\w*|anaesthe\w*|oestr\w*|paediatric\w*|faeces|diarrhoea|foetus|leukaemia|anaemi\w*|ischaemi\w*|orthopaedic\w*|whilst|amongst)\b/gi, 'British form'],
]
// "grey" survives in names spelled that way.
const GREY_OK = /\b(african|timneh|congo)\s+greys?\b|\bgrey\s+(kangaroo|parrot)s?\b/gi

const ADS = /\b(shop now|buy now|order now|sign up (today|now)|use (promo |discount )?code|promo code|discount code|\d+% off|free shipping|best (deals|prices)|unbeatable|visit (their|the) (store|shop|site|website)|head (over )?to (their|the) (store|shop|site|website)|available (at|on|from) (amazon|chewy|petco|petsmart|walmart|target|ebay)|our (favorite|top) (pick|brand|retailer)|trusted (brand|retailer|seller)|industry[- ]leading|world'?s (best|leading)|highly recommend (them|their)|go-to (shop|store|brand|retailer))\b|[?&]utm_\w+=|[?&](ref|aff|affiliate)=/gi

const SEE_OUR = /\b(see|check out|read|visit) our\b/gi
const CLOSER = /^\s*(for more|related (reading|guides|articles)|further reading|keep reading|more (on|from|guides)|learn more|read next|you might also|see also|explore more)\b/i

const UTC_TIME = /\b(?:[01]?\d|2[0-3]):[0-5]\d(?::[0-5]\d)?\s*(?:[ap]\.?m\.?\s*)?(?:UTC|GMT|Z)\b|\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?(?:\.\d+)?Z\b/gi
const ZONE_LABEL = /\b(?:[01]?\d|2[0-3]):[0-5]\d\s*(?:[ap]\.?m\.?\s*)?(?:EDT|EST|ET|Eastern)\b/gi

const CYCLING = /\b(CLAUDE|NEEDS_IMAGE|IMAGE_PROMPTS|BEASTLYPEDIA_FACT_GAPS)\.md\b/
const MOVE = /\b(git\s+mv|mv|move|Move-Item|Rename-Item|cp|copy|Copy-Item)\b/i
const CROP = /(\bcrop\b|\.extract\(|-crop\b|-extent\b|fit:\s*['"]?(cover|fill)\b|\bfit=(cover|fill)\b|\.resize\(\s*\d+\s*,\s*\d+)/i
const FACT_PHOTO = /(assets[\/\\]+facts|FACT_IMAGES|fact[ _-]?(photo|image)s?)/i

const BUILD = /\bnpm\s+run\s+build(?=$|[\s;&|"'`)])/m
const ASKED_BUILD = /\b(npm run build|run (the |a )?(full )?build|do (the |a )?(full )?build|build (it|the site|now)|go ahead (and )?build|please build|ok(ay)? to build|you can build)\b/gi
const NEGATED = /\b(don'?t|do not|never|no|not|without|unless|blocks?|blocking|skip)\b[^.]{0,25}$/i

function scanProse(path: string, added: string): Hit[] {
  const hits: Hit[] = []
  const lines = added.split('\n')

  for (const line of lines) {
    if (STATUTE.test(line) || SEO_LINE.test(line)) continue

    const dash = line.search(/[–—]/)
    if (dash >= 0) hits.push({ rule: 'dash', detail: snip(line, dash, 1) })

    const kept = line.replace(GREY_OK, m => '_'.repeat(m.length))
    for (const [re, kind] of BRITISH) {
      for (const m of kept.matchAll(re)) {
        hits.push({ rule: 'British spelling', detail: `"${m[0]}" (${kind})` })
      }
    }

    for (const m of line.matchAll(ADS)) {
      hits.push({ rule: 'reads like an ad', detail: snip(line, m.index ?? 0, m[0].length) })
    }
  }

  if (isContent(path)) {
    for (const m of added.matchAll(SEE_OUR)) {
      hits.push({ rule: '"see our" link phrasing', detail: snip(added, m.index ?? 0, m[0].length) })
    }

    for (const para of added.split(/\n\s*\n/)) {
      const links = para.match(/\]\(/g)?.length ?? 0
      const bare = para.replace(/\[[^\]]*\]\([^)]*\)/g, '').replace(/[\s.,;:]+/g, ' ').trim()
      if ((links >= 3 && bare.length < 120) || (links >= 2 && CLOSER.test(para))) {
        hits.push({ rule: 'link-library paragraph', detail: snip(para, 0, 60) })
      }
    }
  }

  return hits
}

function scanShell(command: string): Hit[] {
  const hits: Hit[] = []

  if (CROP.test(command) && FACT_PHOTO.test(command)) {
    hits.push({ rule: 'cropping a fact photo', detail: 'fact photos keep their aspect; re-encode only' })
  }

  if (MOVE.test(command) && /\barchive[\/\\]/i.test(command)) {
    const named = command.match(CYCLING)
    if (named) {
      hits.push({ rule: 'doc moved to archive/', detail: `${named[0]} stays in root` })
    } else if (!/_COMPLETED_\d{4}-\d{2}-\d{2}\.md/.test(command)) {
      hits.push({ rule: 'doc moved to archive/', detail: 'only an empty one-off plan leaves root, as <NAME>_COMPLETED_<YYYY-MM-DD>.md' })
    }
  }

  return hits
}

function addedLines(before: string, after: string) {
  const had = new Set(before.split('\n'))
  // Blank lines always stay, so paragraph breaks survive the diff.
  return after
    .split('\n')
    .filter(line => line.trim() === '' || !had.has(line))
    .join('\n')
}

const str = (v: unknown) => (typeof v === 'string' ? v : '')

async function flag($: EngineInterface, where: string, hits: Hit[]) {
  if (hits.length === 0) return
  await update($, flags, list => {
    const fresh: Flag[] = hits
      .map(h => ({ ...h, where }))
      .filter(f => !list.some(o => o.rule === f.rule && o.where === f.where && o.detail === f.detail))
    return [...fresh.reverse(), ...list].slice(0, MAX_FLAGS)
  })
}

export const register: Register = on => {
  let buildAsked = false

  on('prompt.submit', async ($, e, next) => {
    buildAsked = [...e.text.matchAll(ASKED_BUILD)].some(
      m => !NEGATED.test(e.text.slice(0, m.index ?? 0)),
    )
    return next(e)
  })

  on('tool.call', async ($, e, next) => {
    const args = e as unknown as Record<string, unknown>

    if (e.tool === 'Bash' || e.tool === 'PowerShell') {
      const command = str(args.command)

      if (BUILD.test(command) && !buildAsked) {
        await flag($, e.tool, [{ rule: 'npm run build blocked', detail: 'you did not ask for a build this prompt' }])
        return {
          deny: 'zookeeper: `npm run build` is blocked unless the user asked for a build in this prompt. Installs stop at check-images.mjs and check-internal-links.mjs.',
        }
      }

      await flag($, e.tool, scanShell(command))
      return next(e)
    }

    if (e.tool === 'Edit' || e.tool === 'Write' || e.tool === 'MultiEdit') {
      const path = str(args.file_path)
      let added = ''

      if (e.tool === 'Edit') {
        added = addedLines(str(args.old_string), str(args.new_string))
      } else if (e.tool === 'MultiEdit') {
        const edits = Array.isArray(args.edits) ? (args.edits as Record<string, unknown>[]) : []
        added = edits.map(x => addedLines(str(x.old_string), str(x.new_string))).join('\n')
      } else {
        const before = await $.fs.read(path).catch(() => '')
        added = addedLines(before, str(args.content))
      }

      const hits: Hit[] = []
      if (isProse(path)) hits.push(...scanProse(path, added))
      if (/\/archive\//i.test(norm(path)) && CYCLING.test(norm(path).split('/').pop() ?? '')) {
        hits.push({ rule: 'doc moved to archive/', detail: 'cycling docs and CLAUDE.md stay in root' })
      }
      if (CROP.test(added) && FACT_PHOTO.test(added)) {
        hits.push({ rule: 'cropping a fact photo', detail: 'fact photos keep their aspect; re-encode only' })
      }

      await flag($, short(path), hits)
    }

    return next(e)
  })

  on('turn.complete', async ($, e, next) => {
    if (e.agentId === undefined) {
      const text = e.answer.replace(/```[\s\S]*?```/g, '')
      const hits: Hit[] = []

      for (const m of text.matchAll(UTC_TIME)) {
        const before = text.slice(0, m.index ?? 0)
        const inParens = before.lastIndexOf('(') > before.lastIndexOf(')')
        if (!inParens) hits.push({ rule: 'bare UTC time in chat', detail: snip(text, m.index ?? 0, m[0].length) })
      }
      for (const m of text.matchAll(ZONE_LABEL)) {
        hits.push({ rule: 'zone label on my time', detail: snip(text, m.index ?? 0, m[0].length) })
      }

      await flag($, 'chat', hits)
    }
    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const list = await read($, flags)
    const below = await next(e)

    if (e.props.hasSurvey || list.length === 0) {
      return below
    }

    const { Box, Button, Text } = $.ui.resolve(e)
    const more = list.length - SHOWN

    const mine = (
      <Box flexDirection="column">
        <Box>
          <Text color="cyan" bold>
            Zookeeper{' '}
          </Text>
          <Text dimColor>
            {list.length} flag{list.length === 1 ? '' : 's'}{' '}
          </Text>
          <Button key="clear" label="Clear" onPress={() => update($, flags, () => [])} />
        </Box>
        {list.slice(0, SHOWN).map((f, i) => (
          <Text key={`f${i}`} wrap="truncate-end">
            <Text color="cyan">{f.rule}</Text>
            <Text dimColor> {f.where}: </Text>
            {f.detail}
          </Text>
        ))}
        {more > 0 ? <Text dimColor>+{more} older</Text> : null}
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
