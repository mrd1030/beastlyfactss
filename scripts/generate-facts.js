#!/usr/bin/env node
/**
 * Usage: node scripts/generate-facts.js [count]
 * Generates new animal facts via xAI Grok and appends them to src/lib/data/facts.js
 *
 * Requires: XAI_API_KEY environment variable
 */

import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FACTS_FILE = path.resolve(__dirname, '../src/lib/data/facts.js');
const XAI_API_KEY = process.env.XAI_API_KEY;
const COUNT = parseInt(process.argv[2]) || 5;

if (!XAI_API_KEY) {
  console.error('❌  Missing XAI_API_KEY environment variable.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Read existing facts
// ---------------------------------------------------------------------------
function readCurrentFacts() {
  const source = fs.readFileSync(FACTS_FILE, 'utf-8');

  const idMatches = source.match(/id:\s*(\d+)/g) || [];
  const maxId = idMatches.reduce((max, m) => {
    const n = parseInt(m.replace('id:', '').trim());
    return n > max ? n : max;
  }, 0);

  const titleMatches = [...source.matchAll(/title:\s*"([^"]+)"/g)];
  const existingTitles = titleMatches.map(m => m[1]);

  return { source, maxId, existingTitles };
}

// ---------------------------------------------------------------------------
// Call xAI Grok API
// ---------------------------------------------------------------------------
async function generateFacts(existingTitles, count) {
  const prompt = `Generate exactly ${count} unique, surprising, and scientifically accurate animal facts for Beastly Facts.

Rules:
- Each fact must be about a DIFFERENT animal
- Do NOT reuse any of these titles: ${existingTitles.slice(-80).join(' | ')}
- Keep each fact to 2-3 sentences
- Use one of these categories exactly: Mammals, Birds, Reptiles, Ocean, Weird & Wonderful, Dogs & Cats
- Tone: engaging and fun, but factual

Respond with ONLY a raw JSON array (no markdown) of objects with these exact keys:
title, animal, emoji, category, fact`;

  const res = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${XAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'grok-4.3',           // ← Use a real xAI model
      temperature: 0.85,
      messages: [{ role: 'user', content: prompt }],
      // Optional but recommended for cleaner output:
      response_format: { type: "json_object" }   // xAI supports this
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`xAI API error ${res.status}: ${err}`);
  }

  const json = await res.json();
  let text = json.choices[0].message.content.trim();

  // Clean up possible markdown fences
  text = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');

  return JSON.parse(text);
}

// ---------------------------------------------------------------------------
// Append to facts.js
// ---------------------------------------------------------------------------
function appendFacts(source, newFacts, startId) {
  const factsWithIds = newFacts.map((f, i) => ({
    id: startId + i + 1,
    title: f.title,
    emoji: f.emoji,
    animal: f.animal,
    category: f.category,
    fact: f.fact,
    image: f.emoji, // You may want to change this later
  }));

  const jsLines = factsWithIds.map(f =>
    `  { id: ${f.id}, title: ${JSON.stringify(f.title)}, emoji: ${JSON.stringify(f.emoji)}, animal: ${JSON.stringify(f.animal)}, category: ${JSON.stringify(f.category)}, fact: ${JSON.stringify(f.fact)}, image: ${JSON.stringify(f.image)} }`
  ).join(',\n');

  const insertPoint = source.lastIndexOf('];');
  if (insertPoint === -1) throw new Error('Could not find closing ]; in facts.js');

  const updated =
    source.slice(0, insertPoint) +
    ',\n' + jsLines + '\n' +
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

  console.log(`\n✨  Generating ${COUNT} new facts via xAI Grok...`);
  const newFacts = await generateFacts(existingTitles, COUNT);
  console.log(`   Received ${newFacts.length} facts.`);

  const { updated, factsWithIds } = appendFacts(source, newFacts, maxId);

  fs.writeFileSync(FACTS_FILE, updated, 'utf-8');

  console.log('\n✅  facts.js updated! New facts added:');
  factsWithIds.forEach(f => 
    console.log(`   #${f.id} [${f.category}] ${f.emoji} ${f.title} - ${f.animal}`)
  );
})();