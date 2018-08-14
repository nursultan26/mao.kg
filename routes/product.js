var express = require('express');
var router = express.Router();
var config = require('../config')
var fs = require('fs')
/* libraries for photo upload */
var multer = require('multer');
var upload = multer({dest: './public/img'});


/* GET home page. */
module.exports = function(app, db) {
	router.get('/all', function(req, res, next) {
		res.render('catalog', {path: '../../'});
	});	

	router.get('/new', function(req, res, next) {
		res.render('catalog', {path: '../../'});
	});

	router.get('/trend', function(req, res, next) {
		res.render('catalog', {path: '../../'});
	});

	router.get('/card', function(req, res, next) {
		res.render('card', {path: '../../'});
	});

	router.get('/add', function(req, res, next) {
		res.render('product-add');
	});

	router.post('/add', upload.any(), function(req, res, next) {
		db.Goods.create({
			ext_id: 123,
	        title: req.body.title,
	        articul: req.body.articul,
	        made_in: req.body.madeIn,
	        oldPrice: req.body.oldPrice,
	        price: req.body.price,
	        size: req.body.size,
	        img: req.files[0].filename
		})
		res.render('product-add');
	});



	app.use('/product', router)
};