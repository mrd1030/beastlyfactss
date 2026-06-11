export default {
  name: 'sourceItem',
  title: 'Source Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Source Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.required(),
    },
    {
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'Scientific Paper', value: 'scientific' },
          { title: 'Educational Site', value: 'educational' },
          { title: 'Article / News', value: 'article' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
    },
  },
}