// schemaTypes/post.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for SEO',
        }),
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short summary for SEO',
    }),
    // --- NEW SEO FIELDS START HERE ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      description: 'Override the default title for search engines. Ideal length 50-60 characters.',
      validation: Rule => Rule.max(60).warning('Longer titles may be truncated by Google.')
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
      description: 'The snippet that appears in search results. Ideal length 150-160 characters.',
      validation: Rule => Rule.max(160).warning('Descriptions over 160 characters are usually cut off.')
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Social Image',
      type: 'image',
      description: 'Custom image for Twitter/Facebook link previews. If left blank, the Main Image will be used.',
      options: { hotspot: true },
    }),
    // --- NEW SEO FIELDS END HERE ---
    defineField({
      name: 'animalType',
      title: 'Animal Type',
      type: 'string',
      options: {
        list: [
          { title: 'Reptile', value: 'reptile' },
          { title: 'Small Mammal', value: 'small-mammal' },
          { title: 'Dog', value: 'dog' },
          { title: 'Cat', value: 'cat' },
          { title: 'Bird', value: 'bird' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      initialValue: 6,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'link', title: 'Link URL', type: 'url' },
          ],
        },
        { type: 'productRecommendation' },
        { type: 'prosCons' },
        { type: 'comparisonTable' },
        { type: 'affiliateDisclosure' },
        { type: 'sourcesBlock' },
        { type: 'funFact' },
      ],
    }),
  ],
})