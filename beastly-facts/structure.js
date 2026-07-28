import SplitPreview from '../src/components/SplitPreview'

export const defaultDocumentNode = (S, { schemaType }) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view.component(SplitPreview).title('Split Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}

// The default Structure Builder list sorts every document type by
// _updatedAt desc, which makes the Category list look shuffled since editors
// jump around updating different categories over time. Categories are a flat,
// non-time-sensitive taxonomy, so this overrides just that one list to open
// sorted alphabetically by title, while every other document type keeps
// Sanity's normal auto-generated list untouched.
export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('category')
        .title('Category')
        .child(
          S.documentTypeList('category')
            .title('Category')
            .defaultOrdering([{ field: 'title', direction: 'asc' }])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'category'),
    ])