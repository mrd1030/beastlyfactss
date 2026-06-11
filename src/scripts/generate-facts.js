#!/usr/bin/env node
/**
 * Usage: node scripts/generate-facts.js [count]
 * Generates new animal facts via OpenAI and appends them to src/lib/data/facts.js
 *
 * Requires: OPENAI_API_KEY environment variable
 *   export OPENAI_API_KEY=sk-...
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FACTS_FILE = path.resolve(__dirname, '../src/lib/data/facts.js');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const COUNT = parseInt(process.argv[2]) || 5;

if (!OPENAI_API_KEY) {
  console.error('❌  Missing OPENAI_API_KEY environment variable.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Read existing facts.js and extract current facts array
// ---------------------------------------------------------------------------
function readCurrentFacts() {
  const source = fs.readFileSync(FACTS_FILE, 'utf-8');

  // Extract every { id: N, ... } object from the array
  const idMatches = source.match(/id:\s*(\d+)/g) || [];
  const maxId = idMatches.reduce((max, m) => {
    const n = parseInt(m.replace('id:', '').trim());
    return n > max ? n : max;
  }, 0);

  // Extract all title values to avoid duplicates
  const titleMatches = [...source.matchAll(/title:\s*"([^"]+)"/g)];
  const existingTitles = titleMatches.map(m => m[1]);

  return { source, maxId, existingTitles };
}

// ---------------------------------------------------------------------------
// Call OpenAI chat completions
// ---------------------------------------------------------------------------
async function generateFacts(existingTitles, count) {
  const prompt = `Generate exactly ${count} unique, surprising, and scientifically accurate animal facts for a wildlife/pet education website called Beastly Facts.

Rules:
- Each fact must be about a DIFFERENT animal
- Do NOT reuse any of these already-published titles: ${existingTitles.slice(-60).join(', ')}
- Facts should be genuinely surprising and written in an engaging, fun tone
- Keep each fact to 2-3 sentences max
- Choose animals from a wide variety: mammals, birds, reptiles, ocean creatures, insects, exotic pets, etc.
- Categories must be exactly one of: Mammals, Birds, Reptiles, Ocean, Weird & Wonderful, Dogs & Cats

Respond with ONLY a raw JSON array (no markdown, no explanation) of ${count} objects, each with keys:
  title (string, 2-5 words), animal (string), emoji (string, one emoji), category (string), fact (string)`;

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.9,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenAI error ${res.status}: ${err}`);
  }

  const json = await res.json();
  const text = json.choices[0].message.content.trim();

  // Strip optional markdown code fences
  const cleaned = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  return JSON.parse(cleaned);
}

// ---------------------------------------------------------------------------
// Append new facts to the source file
// ---------------------------------------------------------------------------
function appendFacts(source, newFacts, startId) {
  const factsWithIds = newFacts.map((f, i) => ({
    id: startId + i,
    title: f.title,
    emoji: f.emoji,
    animal: f.animal,
    category: f.category,
    fact: f.fact,
    image: f.emoji,
  }));

  const jsLines = factsWithIds.map(f =>
    `  { id: ${f.id}, title: ${JSON.stringify(f.title)}, emoji: ${JSON.stringify(f.emoji)}, animal: ${JSON.stringify(f.animal)}, category: ${JSON.stringify(f.category)}, fact: ${JSON.stringify(f.fact)}, image: ${JSON.stringify(f.image)} }`
  ).join(',\n');

  // Find the closing bracket of the facts array and insert before it
  const insertPoint = source.lastIndexOf('];');
  if (insertPoint === -1) throw new Error('Could not find closing ]; in facts.js');

  const updated =
    source.slice(0, insertPoint) +
    ',\n' + jsLines + ',\n' +
    source.slice(insertPoint);

  return { updated, factsWithIds };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
(async () => {
  console.log(`🦁  Reading ${FACTS_FILE}...`);
  const { source, maxId, existingTitles } = readCurrentFacts();
  console.log(`   Found ${existingTitles.length} existing facts (max id: ${maxId})`);

  console.log(`\n✨  Generating ${COUNT} new facts via OpenAI...`);
  const newFacts = await generateFacts(existingTitles, COUNT);
  console.log(`   Received ${newFacts.length} facts.`);

  const { updated, factsWithIds } = appendFacts(source, newFacts, maxId + 1);

  fs.writeFileSync(FACTS_FILE, updated, 'utf-8');

  console.log('\n✅  facts.js updated! New facts added:');
  factsWithIds.forEach(f => console.log(`   #${f.id} [${f.category}] ${f.emoji} ${f.title} — ${f.animal}`));
})();