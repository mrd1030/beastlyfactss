// schemaTypes/blocks/funFact.js
export default {
  name: 'funFact',
  title: 'Fun Fact',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Fun Fact! 💡',
    },
    {
      name: 'text',
      title: 'Fact Text',
      type: 'array', // 👈 Changed from 'text' to 'array'
      of: [
        {
          type: 'block',
          // Stripping out headings/blockquotes so the text stays clean
          styles: [{ title: 'Normal', value: 'normal' }],
          // Enable bulleted lists
          lists: [{ title: 'Bullet', value: 'bullet' }],
          // Enable bold and italic formatting
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
}