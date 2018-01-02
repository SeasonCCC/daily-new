var cheerio = require('cheerio')

var data = require('./data.json')

var getDataList = (body, type) => {
  const $ = cheerio.load(body)
  const config = data[type]
  var $body = $('body').find(config.main)

  let content = []

  if (type === 'juejin') {
    $body.find(config.item).each((i, value) => {
      content.push({
        id: i,
        title: $(value).find(config.title).text(),
        href: 'https://juejin.im' + $(value).find(config.link).attr('href')
      })
    })
  } else if (type === 'sina') {
    for (let item of config.item) {
      $body.find(item).each((i, value) => {
        content.push({
          id: content.length + 1,
          title: $(value).text(),
          href: $(value).attr('href')
        })
      })
    }
  }
  return content
}

export default {
  phase: (body, type) => {
    return getDataList(body, type)
  }
}
