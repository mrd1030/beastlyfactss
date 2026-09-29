import React from 'react';
import BeastleCard from '@/components/beastle/BeastleCard';

// Homepage slot for the daily game, right under the fact sections so it is
// seen without scrolling far.
export default function BeastleTeaser() {
  return (
    <section className="px-4 sm:px-6 py-6">
      <div className="max-w-3xl mx-auto">
        <BeastleCard />
      </div>
    </section>
  );
}
