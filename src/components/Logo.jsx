// src/components/Logo.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ className = "text-xl" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.span 
        whileHover={{ rotate: [0, -10, 10, 0] }} 
        transition={{ duration: 0.4 }}
      >
        🦁
      </motion.span>
      <span className="font-display font-bold text-foreground">
        Beastly<span className="text-secondary">Facts</span>
      </span>
    </div>
  );
}