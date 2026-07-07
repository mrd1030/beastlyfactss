import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Shown under the category heading and used as the category page meta description. Aim for 110-160 characters.',
            validation: (Rule) => Rule.min(110).max(160).warning('Aim for 110-160 characters - Google truncates longer snippets and may rewrite shorter ones.'),
        }),
    ],
});