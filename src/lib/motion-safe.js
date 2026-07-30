import React from 'react';
import { motion as motionOriginal } from 'framer-motion';

// Re-export everything else from framer-motion untouched (AnimatePresence,
// useScroll, useSpring, MotionConfig, etc). The explicit `motion` export
// below shadows the star-exported one.
export * from 'framer-motion';

// Why this exists: for any motion.X element that mounts unconditionally with
// both `initial` and `animate`, framer-motion writes the transform to the
// DOM via direct CSSOM manipulation (element.style.transform = ...), not
// through React's own style-prop reconciliation. Puppeteer's page.content()
// (used by prerender.mjs to capture static HTML) serializes that back using
// the browser's own canonical cssText format: "transform: translateY(-100px);"
// (space after the colon, trailing semicolon). React's hydration comparison,
// however, computes its OWN expected string from the style object prop using
// a different convention: "transform:translateY(-100px)" (no space, no
// trailing semicolon). Same value, different text - and React's hydration
// check is a literal string comparison, so this mismatches on every single
// build regardless of timing (confirmed via a direct diagnostic: the actual
// numeric value matched exactly on both sides, and React still logged
// "Prop `style` did not match" for it). Normal SSR via react-dom/server
// doesn't hit this because both sides go through React's own serializer;
// puppeteer-based prerendering captures the browser's, so the two can never
// agree once framer-motion touches the style attribute.
//
// The only reliable fix is to keep framer-motion from writing that style
// attribute at all on the very first commit - on both prerender's capture
// and the real client's hydration-critical render - then let it take over
// normally right after mount. Each wrapped instance tracks its own "mounted"
// flag: false on the first render (both prerender and a fresh client) drops
// `initial`/`animate` entirely so nothing touches `style`, then an effect
// flips it true post-mount (skipped during prerendering, so the captured
// HTML never contains that style attribute in the first place) and the
// component re-renders with its real animation props restored. Trade-off:
// entrance animations don't play on the very first paint (the element just
// appears already in its `animate` position) - whileInView-only animations
// (the majority on this site) are untouched since they never set an
// explicit `animate` prop, and later mounts of the same element (e.g.
// CategoryBrowse re-selecting a category) still animate normally since
// they're not the component's first-ever render.
//
// This has to cover ANY explicit `animate` prop, not just ones paired with
// `initial` - HeroSection's floating emoji decorations use
// `animate={{y:[0,-15,0], ...}}` with no `initial` at all (an infinite,
// continuously-looping animation with no fixed resting state). Confirmed via
// a direct diff of prerendered vs. fresh-client HTML: those elements' inline
// transform values differed (e.g. translateY(-14.8429px) vs -14.3579px)
// simply because each is a separate browser session capturing a different,
// arbitrary point in an animation loop that never settles - there's no
// "initial" value to converge on, so suppressing until mounted is the only
// way to keep the first commit deterministic on both sides.
const wrapCache = new WeakMap();

function wrap(Component) {
  if (wrapCache.has(Component)) return wrapCache.get(Component);
  const Wrapped = React.forwardRef(function PrerenderSafeMotion(props, ref) {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      if (!(typeof window !== 'undefined' && window.__IS_PRERENDER__)) setMounted(true);
    }, []);

    // Framer Motion merges an author-provided `style` prop with its own
    // motion-value-driven styles into ONE object it writes imperatively via
    // its own internal path (not React's style-prop reconciliation) - so
    // even with animate/initial suppressed, a plain positional `style` prop
    // (e.g. HeroSection's floating emoji `style={{left, top}}`) still hits
    // the same browser-vs-React formatting mismatch. Suppress it too.
    //
    // Either `initial` OR `animate` alone is enough to trigger this - not
    // just entrance animations paired with an explicit `animate`. Confirmed
    // directly: FactCard's `initial={{opacity:0,y:30}} whileInView={...}`
    // (no `animate` at all) hit the exact same "Prop style did not match"
    // warning, since `initial`'s value is what framer-motion bakes into the
    // inline style on mount, regardless of what eventually triggers a
    // transition away from it (animate, whileInView, or anything else).
    const hasEntranceState = 'animate' in props || 'initial' in props;
    const passedProps = (hasEntranceState && !mounted)
      ? { ...props, initial: undefined, animate: undefined, style: undefined }
      : props;

    return React.createElement(Component, { ...passedProps, ref });
  });
  Wrapped.displayName = `PrerenderSafeMotion(${Component.displayName || Component.name || 'Component'})`;
  wrapCache.set(Component, Wrapped);
  return Wrapped;
}

export const motion = new Proxy(motionOriginal, {
  apply(target, thisArg, args) {
    return wrap(Reflect.apply(target, thisArg, args));
  },
  get(target, prop, receiver) {
    const value = Reflect.get(target, prop, receiver);
    // framer-motion's motion.nav/div/etc are React.forwardRef components -
    // typeof "object" with a $$typeof marker, NOT typeof "function". Checking
    // only for "function" silently let every built-in motion.X intrinsic
    // through unwrapped, and only motion(CustomComponent) calls (which go
    // through the `apply` trap above) were ever actually getting fixed.
    const isComponent = typeof value === 'function' ||
      (typeof value === 'object' && value !== null && '$$typeof' in value);
    return isComponent ? wrap(value) : value;
  },
});
