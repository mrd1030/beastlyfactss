import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { motion } from '@/lib/motion-safe';
import { ArrowLeft } from 'lucide-react';
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
