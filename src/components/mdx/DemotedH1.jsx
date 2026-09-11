// Blog templates already render the post title as the page <h1>, and 709 of
// the MDX bodies open with that same title as a markdown H1. This used to
// demote it to an <h2>, which kept one H1 per page but printed the title a
// second time, as a styled section heading above the body. Rendering nothing
// removes the repeat without touching the content files. TableOfContents.jsx
// only scans headings that exist in the DOM, so the title never reaches the
// "On This Page" list either.
export default function DemotedH1() {
  return null;
}
