import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star } from 'lucide-react';
import { RETAILERS } from '@/lib/data/affiliateProducts';
import LocalImage from '@/components/shared/LocalImage';

export default function ProductModal({ product, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!product) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    const focusTimer = setTimeout(() => {
      if (modalRef.current) {
        const firstBtn = modalRef.current.querySelector('button');
        if (firstBtn) firstBtn.focus();
      }
    }, 100);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [product, onClose]);

  if (!product) return null;

  const retailerLabel = RETAILERS[product.retailer]?.label || 'Amazon';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-card rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-border"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={product.product}
        >
          <div className="flex justify-end mb-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {product.image && (
            <div className="flex justify-center mb-4">
              <LocalImage
                src={product.image}
                alt={product.product}
                className="w-full max-h-56 object-contain rounded-2xl border border-border bg-white"
                loading="eager"
                fullSize
              />
            </div>
          )}

          <span className="text-xs font-display font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {product.category}
          </span>

          <h2 className="font-display font-bold text-lg mt-3 mb-2 text-foreground leading-snug">
            {product.product}
          </h2>

          {(product.rating != null || product.price) && (
            <div className="flex items-center gap-3 mb-3">
              {product.rating != null && (
                <span className="flex items-center gap-1 text-sm font-body text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="font-semibold">{product.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground text-xs">/ 5</span>
                </span>
              )}
              {product.price && (
                <span className="text-sm font-body font-semibold text-foreground">{product.price}</span>
              )}
            </div>
          )}

          {product.description && (
            <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">
              {product.description}
            </p>
          )}

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-full bg-secondary text-secondary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity focus:ring-2 focus:ring-secondary focus:outline-none"
          >
            <ShoppingCart className="w-4 h-4 flex-shrink-0" />
            See on {retailerLabel}
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
