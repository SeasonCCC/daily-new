var http = require('http');
var fs = require('fs');
var url = require('url');

var jsdom = require("jsdom");
var { JSDOM } = jsdom;
var dom = new JSDOM();
var $ = require('jquery')(dom.window);

var request = require('request');
var async = require('async');

var express = require('express');
var app = express();

var data = require('./data.json');



app.get('/config', function(req, res){
	res.send(data);
});


app.use('/', function(req, res){
	if (typeof(data[req.path.substr(1)]) != "undefined") {
		let subData = {};
		subData[req.path.substr(1)] = data[req.path.substr(1)];
		main(subData).then((content)=>{
			res.send(content);
		});		
	} else {
		main(data).then((content)=>{
			res.send(content);
		});
	}
});


app.listen(3000);



/* ------------------- public function ------------------- */
async function main(options){
	let contentList = {};
	for (let k of Object.keys(options)) {
		contentList[k] = await getDataList(options[k]);
	}
	return contentList;
}


function getDataList(config){
	return new Promise((resolve, reject)=>{
		request(config.address, (error, response, body)=> {
			let $body = $(body);
			let content = [];
			let regx = /http/;
			$body.find(config.main).find(config.item).each((i, value)=>{
				if (!regx.test($(value).find(config.link).attr('href'))) {
					var href = url.parse(config.address, 'true').protocol +'//'+ url.parse(config.address, 'true').host + '/' + $(value).find(config.link).attr('href');
				}else{
					var href = $(value).find(config.link).attr('href');
				}
				content.push({
					title: $(value).find(config.title).text(),
					href: href,
				});
			});
			resolve(content);
		});	
	});
}
