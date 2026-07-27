import { filterFacts, orderFacts, paginateFacts, shuffleArray } from '@/lib/facts-utils';

const facts = [
  { id: 1, title: 'Octopus brains', animal: 'Octopus', fact: 'Nine brains', category: 'Ocean', emoji: '🐙', image: '' },
  { id: 2, title: 'Dog noses', animal: 'Dog', fact: 'Unique prints', category: 'Dogs & Cats', emoji: '🐶', image: '' },
  { id: 3, title: 'Iguana tails', animal: 'Iguana', fact: 'Tail drop defense', category: 'Reptiles', emoji: '🦎', image: '' },
] as const;

describe('facts utils', () => {
  it('filters by category and search', () => {
    const filtered = filterFacts([...facts], 'Reptiles', 'tail');
    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.id).toBe(3);
  });

  it('orders facts using persisted random ids', () => {
    const ordered = orderFacts([...facts], true, [3, 1, 2]);
    expect(ordered.map((fact) => fact.id)).toEqual([3, 1, 2]);
  });

  it('paginates safely', () => {
    const { pageCount, currentPage, factsPage } = paginateFacts([...facts], 3, 2);
    expect(pageCount).toBe(2);
    expect(currentPage).toBe(1);
    expect(factsPage).toHaveLength(1);
  });

  it('shuffles deterministically with custom random', () => {
    const randomValues = [0.1, 0.9, 0.4];
    let index = 0;
    const shuffled = shuffleArray([1, 2, 3, 4], () => randomValues[index++ % randomValues.length] ?? 0);
    expect(shuffled).toEqual([2, 4, 3, 1]);
  });
});
