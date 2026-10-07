import React, { useState, useEffect } from 'react';

// Holds a day-picked homepage section invisible until today's picks are in,
// then fades it up, so a visitor never watches one set of facts swap for
// another.
//
// The sections inside pick their content in a post-mount effect (prerender
// bakes a fixed default so hydration matches; see HeroSection's dailyFact).
// That used to show the default for a moment and then swap it in plain view.
// Children's effects run before this one in the same flush, and React batches
// every state update from that flush into one render, so `ready` lands in the
// same commit as the swapped content: the fade starts on today's picks.
//
// Prerender skips the upgrade, so the static HTML carries the class at
// opacity 0 and the first client render matches it. index.html's <noscript>
// style shows these sections for anyone without JavaScript.
export default function DailyFade({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setReady(true);
  }, []);

  return (
    <div className={`daily-fade transition-opacity duration-300 motion-reduce:transition-none ${ready ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}
