// Blog templates already render the post title as the page <h1>,
// so in-content markdown H1s are demoted to keep exactly one H1 per page.
export default function DemotedH1(props) {
  return <h2 {...props} />;
}
