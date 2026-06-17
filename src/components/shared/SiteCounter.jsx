import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client'; // Hooking into your analytics engine

function getRealtimeBaseCount() {
  const LAUNCH_DATE = new Date('2026-04-01').getTime(); 
  const NOW = Date.now();
  
  const MS_PER_VISITOR = 420000; 
  const calculatedTraffic = Math.floor((NOW - LAUNCH_DATE) / MS_PER_VISITOR);
  const SEED_BASE = 9500; 
  
  return SEED_BASE + calculatedTraffic;
}

export default function SiteCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    setCount(getRealtimeBaseCount());

    // ACTION: Silently track a real visit in your dashboard on component mount
    try {
      base44.analytics.track({ eventName: 'footer_counter_visit' });
    } catch (err) {
      console.error('Analytics failed to log', err);
    }

    let timeoutId;
    
    const simulateLiveTraffic = () => {
      const nextTickDelay = Math.floor(Math.random() * 135000) + 45000;

      timeoutId = setTimeout(() => {
        setCount(prev => (prev && Math.random() > 0.7 ? prev + 1 : prev));
        simulateLiveTraffic();
      }, nextTickDelay);
    };

    
    simulateLiveTraffic();

    return () => clearTimeout(timeoutId);
  }, []);

  if (!count) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/40 border border-border/40 text-[11px] font-body text-muted-foreground tracking-wide select-none transition-all duration-300 hover:bg-muted/60">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>
      <span>
        Fellow explorers in the pack: <strong className="font-semibold text-foreground">{count.toLocaleString()}</strong>
      </span>
    </div>
  );
}