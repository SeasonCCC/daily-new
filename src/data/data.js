var http = require('http')
var fs = require('fs')
var url = require('url')

var cheerio = require('cheerio')

var data = require('./data.json')


var getDataList = (body, type) => {
  const $ = cheerio.load(body)
  const config = data[type]
  var $body = $('body').find(config.main)
  let content = []
  $body.find(config.item).each((i, value) => {
    content.push({
      id: i,
      title: $(value).find(config.title).text(),
      href: 'https://juejin.im'+$(value).find(config.link).attr('href'),
    })
  })
  return content
}


export default {
  phase: (body, type) => {
    return getDataList(body, type)
  },
}



/* ------------------- public function ------------------- */
// async function main(options){
//     let contentList = {}
//     for (let k of Object.keys(options)) {
//         contentList[k] = await getDataList(options[k])
//     }
//     return contentList
// }


