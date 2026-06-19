import React from 'react';

export default function Figure({ 
  src, 
  alt = '', 
  caption = '', 
  className = '' 
}) {
  return (
    <figure className={`my-8 ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full rounded-xl border border-border shadow-sm" 
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground font-body italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
