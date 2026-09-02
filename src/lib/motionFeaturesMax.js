// framer-motion's full feature set (domAnimation + drag + layout projection),
// loaded on demand by FactModal's <LazyMotion features={...}>. Kept in its own
// module rather than imported inline so Rollup can split it into an async
// chunk: importing `domMax` from 'framer-motion' directly at a call site would
// resolve to the same module the sync graph already holds and defeat the split.
import { domMax } from 'framer-motion';
export default domMax;
