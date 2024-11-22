import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})

/*


defineField({
      name: 'events',
      type: 'string',
      initialValue: 'm',
      description: 'what does ',
      options: {
        list: ['m', 'l', 'xl', '2xl'],
        layout: 'radio',
      },
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
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.unique().min(1),
    }),
 */
