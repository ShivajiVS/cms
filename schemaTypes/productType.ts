import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'more',
      title: 'More Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: ['M', 'L', 'XL', '2XL'], // Allowed sizes
          },
        },
      ],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.unique().min(1).required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) =>
        Rule.required().integer().min(0).error('Stock must be a non-negative integer.'),
    }),
    defineField({
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{type: 'category'}],
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
      validation: (Rule) => Rule.required().error('Required to generate a page on the website'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'images.0.asset',
      originalPrice: 'originalPrice',
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: select.subtitle,
        media: select.media,
        originalPrice: select.originalPrice,
      }
    },
  },
})

// https://www.sanity.io/learn/course/day-one-with-sanity-studio/creating-a-schema#s-c44db0e39665

// https://www.sanity.io/docs/schema-field-types

// https://www.reddit.com/r/sanity_io/comments/1f260lb/how_to_support_user_submit_rich_text_content_into/?rdt=62601

//
