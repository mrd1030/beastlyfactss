import React, { useMemo, useState } from 'react';
import { Share2 } from 'lucide-react';
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';
import { humanReference } from '@/lib/data/humanReference';

const FIELDS = [
  { key: 'adultSize', label: 'Adult Size' },
  { key: 'wildLifespan', label: 'Wild Lifespan' },
  { key: 'wildDiet', label: 'Wild Diet' },
  { key: 'origin', label: 'Native Range' },
  { key: 'habitat', label: 'Natural Habitat' },
  { key: 'conservation', label: 'Conservation Status' },
];

export default function AnimalCompare({ animal }) {
  const groups = useMemo(() => {
    const byCategory = {};
    for (const a of encyclopediaAnimals) {
      if (a.id === animal.id) continue;
      (byCategory[a.category] ||= []).push(a);
    }
    const categories = Object.keys(byCategory).sort((a, b) => {
      if (a === animal.category) return -1;
      if (b === animal.category) return 1;
      return a.localeCompare(b);
    });
    return categories.map(category => ({ category, animals: byCategory[category] }));
  }, [animal.id, animal.category]);

  const [compareId, setCompareId] = useState('human');
  const compareAnimal = compareId === 'human'
    ? humanReference
    : encyclopediaAnimals.find(a => a.id === compareId) || humanReference;

  const handleShare = () => {
    const text = `${animal.emoji} ${animal.name} vs ${compareAnimal.emoji} ${compareAnimal.name} - see how they stack up on Beastly Facts!`;
    if (navigator.share) {
      navigator.share({ title: 'Animal Comparison - Beastly Facts', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="font-display font-bold text-base text-foreground">⚖️ Compare</h2>
        <select
          value={compareId}
          onChange={(e) => setCompareId(e.target.value)}
          className="text-xs font-display font-semibold bg-muted border border-border rounded-lg px-2.5 py-1.5 text-foreground max-w-[55%]"
        >
          <option value="human">🧑 vs Human</option>
          {groups.map(({ category, animals }) => (
            <optgroup key={category} label={category}>
              {animals.map(a => (
                <option key={a.id} value={a.id}>{a.emoji} vs {a.name}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center">
          <span className="text-3xl block mb-1">{animal.emoji}</span>
          <p className="font-display font-bold text-sm text-foreground leading-snug">{animal.name}</p>
        </div>
        <div className="text-center">
          <span className="text-3xl block mb-1">{compareAnimal.emoji}</span>
          <p className="font-display font-bold text-sm text-foreground leading-snug">{compareAnimal.name}</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {FIELDS.map(field => (
          <div key={field.key}>
            <p className="text-xs font-display font-semibold text-muted-foreground mb-1.5">{field.label}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-muted/50 rounded-lg px-2.5 py-2">
                <p className="text-xs font-body text-foreground leading-snug">{animal.bio?.[field.key] || '-'}</p>
              </div>
              <div className="bg-muted/50 rounded-lg px-2.5 py-2">
                <p className="text-xs font-body text-foreground leading-snug">{compareAnimal.bio?.[field.key] || '-'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleShare}
        className="w-full bg-muted text-foreground font-display font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-muted/70 transition-colors">
        <Share2 className="w-3.5 h-3.5" /> Share this comparison
      </button>
    </div>
  );
}
