import type { Href } from 'expo-router';

import encyclopediaData from './encyclopedia-data.json';
import glossaryData from './glossary-data.json';
import { getGuideImageSource } from './guide-image-map';
import { getSpeciesById } from './species-catalog';

export interface EncyclopediaBio {
  overview: string;
  origin: string;
  habitat: string;
  adultSize: string;
  wildDiet: string;
  wildLifespan: string;
  conservation: string;
}

export interface EncyclopediaRelatedStory {
  slug: string;
  title: string;
}

export interface EncyclopediaAnimal {
  id: string;
  name: string;
  scientific: string;
  category: string;
  emoji: string;
  difficulty: string;
  guideId?: string;
  available: boolean;
  image?: string;
  relatedStory?: EncyclopediaRelatedStory;
  bio: EncyclopediaBio;
}

export interface EncyclopediaCategory {
  name: string;
  emoji: string;
  slug: string;
}

export interface GlossaryLink {
  label: string;
  to: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  related?: GlossaryLink[];
}

export interface GlossaryCategory {
  id: string;
  label: string;
  emoji: string;
  terms: GlossaryTerm[];
}

const ENCYCLOPEDIA = encyclopediaData as {
  animals: EncyclopediaAnimal[];
  categories: EncyclopediaCategory[];
  difficultyColor: Record<string, string>;
};

const GLOSSARY = glossaryData as GlossaryCategory[];

export function getAllEncyclopediaAnimals(): EncyclopediaAnimal[] {
  return ENCYCLOPEDIA.animals;
}

export function getEncyclopediaAnimalById(id: string): EncyclopediaAnimal | undefined {
  return ENCYCLOPEDIA.animals.find((animal) => animal.id === id);
}

export function getEncyclopediaAnimalByGuideId(guideId: string): EncyclopediaAnimal | undefined {
  return ENCYCLOPEDIA.animals.find((animal) => animal.guideId === guideId);
}

export function getEncyclopediaCategories(): EncyclopediaCategory[] {
  return ENCYCLOPEDIA.categories;
}

export function getEncyclopediaCategoryEmoji(categoryName: string): string | null {
  const normalized = categoryName.trim().toLowerCase();
  const aliases: Record<string, string> = {
    cat: 'cats',
    dog: 'dogs',
  };
  const target = aliases[normalized] ?? normalized;
  const match = ENCYCLOPEDIA.categories.find((category) => category.name.toLowerCase() === target);
  return match?.emoji ?? null;
}

export function searchEncyclopediaAnimals(query: string): EncyclopediaAnimal[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return ENCYCLOPEDIA.animals;
  return ENCYCLOPEDIA.animals.filter((animal) =>
    `${animal.name} ${animal.scientific} ${animal.category} ${animal.bio.overview}`.toLowerCase().includes(normalized)
  );
}

export function getGlossaryCategories(): GlossaryCategory[] {
  return GLOSSARY;
}

export function getGuideImageSourceForAnimal(animal: Pick<EncyclopediaAnimal, 'id' | 'guideId' | 'image'>): number | null {
  const imageKey =
    animal.guideId ??
    animal.image?.split('/').pop()?.replace(/\.[^.]+$/, '') ??
    animal.id;
  return getGuideImageSource(imageKey);
}

export function getGuideEntryIdFromGlossaryLink(to: string): string | null {
  const match = to.match(/^\/guides\/([^/]+)\/?$/);
  return match ? match[1] : null;
}

export function getBlogSlugFromContentLink(to: string): string | null {
  const match = to.match(/^\/blog\/([^/]+)\/?$/);
  return match ? match[1] : null;
}

export function getAppRouteFromContentLink(to: string): Href | null {
  const guideId = getGuideEntryIdFromGlossaryLink(to);
  if (guideId && getSpeciesById(guideId)) {
    return { pathname: '/entry/[id]', params: { id: guideId } };
  }

  const blogSlug = getBlogSlugFromContentLink(to);
  if (blogSlug) {
    return { pathname: '/entry/slug/[slug]', params: { slug: blogSlug } };
  }

  return null;
}

export function getDifficultyTone(difficulty: string): 'success' | 'warning' | 'danger' | 'accent' | 'textSecondary' {
  if (difficulty.includes('Self-Sufficient') || difficulty.includes('Beginner')) return 'success';
  if (difficulty.includes('Intermediate')) return 'warning';
  if (difficulty.includes('Advanced')) return 'danger';
  return 'accent';
}
