// microCmsからまとめて
const microCmsContentsAllFetch = async () => {
  require('dotenv').config()

  const axios = require('axios')
  const dayjs = require('dayjs')
  const headers = {
    'X-API-KEY': process.env.MICROCMS_API_KEY
  }

  // 取得件数
  const LIMIT = 2

  // microCmsにGETでアクセス
  const contentsFetch = async (offset = 0, limit = LIMIT) => {
    const { data } = await axios.get(process.env.MICROCMS_URL, {
      headers,
      params: {
        limit,
        offset
      }
    })
    return {
      contents: data.contents.map((content) => {
        const datetime = dayjs(content.datetime).locale('ja')
        return {
          path: `/post/${datetime.format('YYYYMMDD')}`,
          date: datetime.format('YYYY-MM-DD'),
          time: datetime.format('HH:mm:ss'),
          title: content.title,
          content: content.content
        }
      }),
      totalCount: data.totalCount
    }
  }

  let { contents, totalCount } = await contentsFetch()
  while (contents.length < totalCount) {
    // 2回目以降の取得
    const data = await contentsFetch(contents.length)
    contents = contents.concat(data.contents)
  }

  return await contents
}

module.exports = {
  microCmsContentsAllFetch
}
