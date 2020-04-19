const { microCmsContentsAllFetch } = require('./server/microcms.js')

module.exports = (api) => {
  api.loadSource(async (actions) => {
    const contents = await microCmsContentsAllFetch()

    // GraphQLのスキーマ追加
    const collection = actions.addCollection('microCms')
    for (const content of contents) {
      collection.addNode(content)
    }
  })

  api.createPages(async ({ createPage }) => {
    const contents = await microCmsContentsAllFetch()

    // MicroCmsから取得した内容を元にページ生成
    for (const content of contents) {
      createPage({
        path: content.path,
        component: './src/templates/Post.vue',
        context: content
      })
    }
  })
}
