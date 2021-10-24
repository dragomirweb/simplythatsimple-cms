export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'about',
      title: 'Despre noi',
      type: 'blockContent',
    },
  ],
}
