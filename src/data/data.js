var cheerio = require('cheerio')

var data = require('./data.json')

var getDataList = (body, type) => {
  const $ = cheerio.load(body)
  const config = data[type]
  let $body = $('body').find(config.main).eq(0)

  let content = []

  if (type === 'juejin') {
    $body.find(config.item).each((i, value) => {
      content.push({
        id: i,
        title: $(value).find(config.title).text(),
        href: 'https://juejin.im' + $(value).find(config.link).attr('href')
      })
    })
  } else if (type === 'qqSports') {
    for (let item of config.item) {
      $body.find(item).each((i, value) => {
        content.push({
          id: content.length + 1,
          title: $(value).text(),
          href: $(value).attr('href')
        })
      })
    }
  } else if (type === 'car') {
    $body.find(config.item).each((i, value) => {
      content.push({
        id: content.length + 1,
        title: $(value).find(config.title).text(),
        href: $(value).attr('href')
      })
    })
  }

  return content
}

export default {
  phase: (body, type) => {
    return getDataList(body, type)
  }
}
