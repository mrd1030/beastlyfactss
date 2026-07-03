export default {
  name: 'sourcesBlock',
  title: 'Sources & Further Reading',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Sources & Further Reading',
    },
    {
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{ type: 'sourceItem' }],
    },
    {
      name: 'showMoreSection',
      title: 'Show "More from BeastlyFacts" link?',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'moreText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'Explore more wild animal facts on BeastlyFacts',
      hidden: ({ parent }) => !parent?.showMoreSection,
    },
    {
      name: 'moreUrl',
      title: 'Link URL',
      type: 'url',
      initialValue: 'https://beastlyfacts.com/blog/',
      hidden: ({ parent }) => !parent?.showMoreSection,
    },
  ],
  preview: {
    select: {
      title: 'heading',
      sources: 'sources',
    },
    prepare({ title, sources = [] }) {
      return {
        title: title || 'Sources & Further Reading',
        subtitle: `${sources.length} source(s)`,
      }
    },
  },
}