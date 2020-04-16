const microCmsFetch = async () => {
  require('dotenv').config()

  const axios = require('axios')
  const headers = {
    'X-API-KEY': process.env.MICROCMS_API_KEY
  }
  return await axios.get('https://zakizaki-test.microcms.io/api/v1/blog', {
    headers
  })
}

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const { data } = await microCmsFetch()

    const collection = actions.addCollection('microCms')
    collection.addNode({
      context: data.context
    })
  })

  api.createPages(() => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
