/**
 * True only for the click that means "follow this link right here".
 *
 * Anything else is the browser's own gesture for opening a link somewhere
 * else: middle click and cmd/ctrl click open a new tab, shift opens a window,
 * alt downloads. A handler that calls preventDefault unconditionally silently
 * breaks all of them, and the link looks broken for no visible reason.
 *
 * Use this to guard any onClick that takes over an <a href> for in-app
 * navigation:
 *
 *   onClick={e => { if (!isPlainLeftClick(e)) return; e.preventDefault(); go(); }}
 *
 * react-router's <Link> already does this internally, so components built on
 * Link do not need it. This is for the hand-rolled anchors.
 */
export function isPlainLeftClick(e) {
  return (
    !e.defaultPrevented &&
    e.button === 0 &&
    !e.metaKey &&
    !e.ctrlKey &&
    !e.shiftKey &&
    !e.altKey
  );
}
