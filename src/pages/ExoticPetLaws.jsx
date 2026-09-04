import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ArrowLeft, ChevronDown, HelpCircle, X } from 'lucide-react';
import LEGAL from '@/lib/data/legalStatus.json';
import LEGAL_GUIDES from '@/lib/generated/legal-guides.json';
import { STATE_NAMES } from '@/lib/data/usStatePaths';
import { withBrand, pickWithinLimit, plural, TITLE_MAX, DESCRIPTION_MAX, BRAND } from '@/lib/utils/seo';
import LegalStatusMap, { STATUS_BUCKETS, BUCKET_ORDER, bucketFor } from '@/components/legal/LegalStatusMap';

const SITE = 'https://beastlyfacts.com';

// The serval is the default because it is the most restricted animal in the
// dataset and uses all five buckets, so the page that gets prerendered at
// /exotic-pet-laws/ shows the map doing something rather than sitting blank.
const DEFAULT_ANIMAL = 'serval';

const ANIMAL_IDS = Object.keys(LEGAL.animals);

// Every article in the Legal category, filtered and sorted at build time by
// scripts/generate-legal-summary.mjs rather than here. This page is the hub for
// the category: the written hub article sits at number 17 of 20 in the category
// feed, where nobody finds it. Filtering it out of mdx-meta.json at runtime
// meant importing ~1MB of metadata for all 426 articles to end up with
// nineteen titles and slugs, and mdx-meta is a chunk this route needs for
// nothing else.

// Maps a legal guide back to the animal it covers, so a guide can link straight
// to that animal's map rather than to the hub.
const GUIDE_TO_ANIMAL = Object.fromEntries(
  Object.entries(LEGAL.animals)
    .filter(([, a]) => a.article)
    .map(([id, a]) => [a.article.replace(/^\/blog\/|\/$/g, ''), id]),
);

// Chips are A-Z by display name so a reader can find their animal. Serval
// stays the default on the hub because it uses every colour bucket; the
// selected chip is independent of this sort.
const ANIMALS_BY_INTEREST = [...ANIMAL_IDS].sort((a, b) =>
  LEGAL.animals[a].name.localeCompare(LEGAL.animals[b].name),
);
