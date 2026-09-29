import { useEffect, useRef, useState } from 'react';

// Players who ask their device to reduce motion get a still dragon: the
// frame timers that bob, blink and flicker him do not run.
export function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return undefined;
    setReduce(mq.matches);
    const on = (e) => setReduce(e.matches);
    mq.addEventListener?.('change', on);
    return () => mq.removeEventListener?.('change', on);
  }, []);
  return reduce;
}

// A frame counter for the pixel animations; it stays at 0 under reduced
// motion.
export function useFrames(ms = 550) {
  const reduce = useReducedMotion();
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    if (reduce) return undefined;
    const t = setInterval(() => setFrame((f) => f + 1), ms);
    return () => clearInterval(t);
  }, [reduce, ms]);
  return frame;
}

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

// For the popups: focus moves inside when it opens, Tab stays inside,
// Escape closes it, and focus goes back to where it was when it closes.
export function useDialogFocus(onClose) {
  const ref = useRef(null);
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    const before = document.activeElement;
    const box = ref.current;
    const items = () => [...(box?.querySelectorAll(FOCUSABLE) || [])].filter((el) => el.offsetParent !== null || el === document.activeElement);
    items()[0]?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        close.current?.();
        return;
      }
      if (e.key !== 'Tab') return;
      const list = items();
      if (!list.length) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    box?.addEventListener('keydown', onKey);
    return () => {
      box?.removeEventListener('keydown', onKey);
      if (before && typeof before.focus === 'function') before.focus();
    };
  }, []);
  return ref;
}
