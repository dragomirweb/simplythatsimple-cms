import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Simply')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            .title('Settings documents')
            .items([
              S.listItem()
                .title('Site settings')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),

              S.listItem()
                .title('Footer settings')
                .child(
                  S.document()
                    .schemaType('footerSettings')
                    .documentId('footerSettings')
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (docs) => !['siteSettings', 'footerSettings'].includes(docs.getId())
      ),
    ])
