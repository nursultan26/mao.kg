var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app, db) {
	
	router.get('/', function(req, res, next) {
		db.Prod_garment.findAll()
		.then(product => {		
			res.render('index', {product});
		})
	});


	router.get('/basket', function(req, res, next) {
		res.render('basket');
	});

	router.get('/delivery', function(req, res, next) {
		res.render('page');
	});



	app.use('/', router)
};