import { createContext, useContext } from 'react';

// Lets an MDX component read facts about the article it is being rendered
// inside. MDX bodies receive no props from the page, so <Sources> had no way to
// know its own article's review date or source count without either threading
// an attribute through all 561 files that use it (which would go stale the
// moment a source was added) or exporting a global (which breaks the moment two
// articles render at once, as they do during prerendering's concurrency).
//
// Defaults to an empty object rather than null so a component can destructure
// unconditionally and simply render nothing when it is used outside a post.
const ArticleMetaContext = createContext({});

export const ArticleMetaProvider = ArticleMetaContext.Provider;

export function useArticleMeta() {
  return useContext(ArticleMetaContext);
}
