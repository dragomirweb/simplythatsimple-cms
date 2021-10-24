export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'about',
      title: 'Despre noi',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
