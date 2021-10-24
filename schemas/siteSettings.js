export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },

    {
      name: 'meta',
      title: 'Meta description',
      type: 'blockContent',
    },

    {
      name: 'phone',
      title: 'Telefon',
      type: 'number',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },

    {
      name: 'facebook',
      title: 'Facebook page',
      type: 'string',
    },

    {
      name: 'instagram',
      title: 'Instagram page',
      type: 'string',
    },

    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
}
