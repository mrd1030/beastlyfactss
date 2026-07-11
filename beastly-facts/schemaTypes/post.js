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
      description: 'Short summary - used as the meta description unless SEO Meta Description is set. Aim for 110-160 characters.',
      validation: Rule => Rule.min(110).max(160).warning('Aim for 110-160 characters - Google truncates longer snippets and may rewrite shorter ones.'),
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Search keywords - the site search matches these in addition to the title and excerpt.',
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
    // --- NEW MOBILE APP FIELDS START HERE ---
    defineField({
      name: 'facts',
      title: 'Quick Facts',
      type: 'array',
      of: [{ type: 'string' }],
      description: "Short standalone facts for the mobile app's daily fact card. One or two sentences each.",
    }),
    defineField({
      name: 'careInfo',
      title: 'Care Info',
      type: 'object',
      description: 'Optional husbandry/care details for the mobile app care-task reminders. Only relevant for posts about a pet/species that needs care - leave blank for Fun Facts, Product Picks, Short Stories, etc.',
      fields: [
        defineField({
          name: 'feedingIntervalDays',
          title: 'Feeding Interval (days)',
          type: 'number',
        }),
        defineField({
          name: 'temperatureRangeF',
          title: 'Temperature Range (°F)',
          type: 'object',
          fields: [
            defineField({ name: 'min', title: 'Min', type: 'number' }),
            defineField({ name: 'max', title: 'Max', type: 'number' }),
          ],
        }),
        defineField({
          name: 'humidityRangePercent',
          title: 'Humidity Range (%)',
          type: 'object',
          fields: [
            defineField({ name: 'min', title: 'Min', type: 'number' }),
            defineField({ name: 'max', title: 'Max', type: 'number' }),
          ],
        }),
        defineField({
          name: 'cleaningIntervalDays',
          title: 'Cleaning / Enclosure Interval (days)',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'quiz',
      title: 'Quiz Questions',
      type: 'array',
      description: 'Optional per-entry quiz questions for the mobile app quiz feature.',
      of: [
        {
          type: 'object',
          name: 'quizQuestion',
          title: 'Quiz Question',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'options',
              title: 'Answer Options',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'correctIndex',
              title: 'Correct Option Index',
              type: 'number',
              description: 'Zero-based index into Answer Options that is the correct answer (e.g. 0 = first option).',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'rarityTier',
      title: 'Rarity Tier',
      type: 'string',
      description: 'Reserved placeholder for a future mobile app polish pass (collectible rarity tiers). Currently unused - safe to leave blank.',
      options: {
        list: [
          { title: 'Common', value: 'common' },
          { title: 'Uncommon', value: 'uncommon' },
          { title: 'Rare', value: 'rare' },
          { title: 'Legendary', value: 'legendary' },
        ],
      },
    }),
    defineField({
      name: 'artworkUrl',
      title: 'Artwork URL',
      type: 'url',
      description: 'Reserved placeholder for a future mobile app polish pass (custom per-species card artwork). Currently unused - safe to leave blank.',
    }),
    // --- NEW MOBILE APP FIELDS END HERE ---
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