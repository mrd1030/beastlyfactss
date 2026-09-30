import React from 'react';
import { GROUP_ICONS } from '@/lib/data/categoryIcons';

// The line icon for an animal group label ("Birds", "Small Mammals"...), or
// nothing when the label has none.
export default function GroupIcon({ name, className = 'w-4 h-4' }) {
  const Icon = GROUP_ICONS[name];
  return Icon ? <Icon className={className} aria-hidden="true" /> : null;
}
