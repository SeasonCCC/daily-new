var http = require('http')
var fs = require('fs')
var url = require('url')

var cheerio = require('cheerio')

var data = require('./data.json')


var getDataList = (body) => {
    // console.log(body)
    const $ = cheerio.load(body)
    const config = data.juejin
    var $body = $('body').find(config.main)
    let content = []
    // let regx = /http/
    // console.log($body)
    $body.find(config.item).each((i, value) => {
        // console.log(value)
        // if (!regx.test($(value).find(config.link).attr('href'))) {
        //     var href = url.parse(config.address, 'true').protocol +'//'+ url.parse(config.address, 'true').host + '/' + $(value).find(config.link).attr('href')
        // }else{
        //     var href = $(value).find(config.link).attr('href')
        // }
        content.push({
            title: $(value).find(config.title).text(),
            href: $(value).find(config.link).attr('href'),
        })
    })
    return content
}





export default {
    phase: (body) => {
        return getDataList(body)
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


