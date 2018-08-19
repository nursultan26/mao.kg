var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app, db) {
	var data = {
		path: "../"
	}
	
	router.get('/', function(req, res, next) {
		db.Models.Good.findAll()
		.then(goods => {		
			data.goods = goods
			res.render('index', {data});
		})
	});


	router.get('/basket', function(req, res, next) {
		res.render('basket', {data});
	});

	router.get('/delivery', function(req, res, next) {
		res.render('page',{data});
	});



	app.use('/', router)
};