// src/components/Logo.jsx
import React from 'react';
import { motion } from '@/lib/motion-safe';
import favicon from '@/assets/favicon.webp';

export default function Logo({ className = "text-xl" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.img
        src={favicon}
        alt="Beastly Facts"
        className="h-[1.4em] w-[1.4em] object-contain"
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.4 }}
      />
      <span className="font-display font-bold text-foreground">
        Beastly<span className="text-secondary">Facts</span>
      </span>
    </div>
  );
}