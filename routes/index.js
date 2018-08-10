var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app, db) {
	
	router.get('/', function(req, res, next) {
		db.Product.findAll()
		.then(product => {		
			console.log(product)
			res.render('index', {product});
		})

		
	});


	router.get('/basket', function(req, res, next) {
		res.render('basket');
	});

	router.get('/delivery', function(req, res, next) {
		res.render('page');
	});

	router.get('/product/card', function(req, res, next) {
		res.render('card', {path: '../../'});
	});

	app.use('/', router)
};