// schemaTypes/productRecommendation.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'productRecommendation',
  title: 'Product Recommendation',
  type: 'object',
  fields: [
    defineField({
      name: 'productRef',
      title: 'Pick from gear list',
      description:
        'Select an already-linked product from affiliateProducts.js (synced via scripts/sync-gear-to-sanity.js) - fills in name, link, and image automatically. Leave blank to enter a one-off product manually below instead.',
      type: 'reference',
      to: [{ type: 'product' }],
    }),
    defineField({
      name: 'productName',
      title: 'Product Name (manual entry - skip if you picked one above)',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!value && !context.parent?.productRef) {
            return 'Required unless you picked a product from the list above.'
          }
          return true
        }),
    }),
    defineField({
      name: 'asin',
      title: 'Amazon ASIN (leave blank for non-Amazon retailers - use Full Affiliate URL below instead)',
      type: 'string',
    }),
    defineField({
      name: 'affiliateUrl',
      title: 'Full Affiliate URL (manual entry - skip if you picked one above)',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Product Image (manual entry - skip if you picked one above)',
      type: 'image',
    }),
    defineField({
      name: 'priceRange',
      title: 'Price Range',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (out of 5)',
      type: 'number',
    }),
    defineField({
      name: 'bestFor',
      title: 'Best For',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'productName', refTitle: 'productRef.productName' },
    prepare({ title, refTitle }) {
      return { title: refTitle || title || 'Product Recommendation' }
    },
  },
})
