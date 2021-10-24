export default {
  name: 'homepageSlider',
  title: 'Slider Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titlu',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Descriere',
      type: 'blockContent',
    },

    {
      name: 'image',
      title: 'Imagine',
      type: 'image',
    },
    {
      name: 'order',
      title: 'Ordinea in slider',
      description: 'Ordinea care este afisat in slider',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error('Adauga ordinea pentru acest slide, ex: 1'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
