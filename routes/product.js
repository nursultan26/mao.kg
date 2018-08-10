var express = require('express');
var router = express.Router();
var config = require('../config')
/* libraries for photo upload */
var multer = require('multer');
var upload = multer({dest: './public/img'});


/* GET home page. */
module.exports = function(app, db) {
	router.get('/all-new', function(req, res, next) {
		res.render('catalog', {path: '../../'});
	});	

	router.get('/card', function(req, res, next) {
		res.render('card', {path: '../../'});
	});

	router.get('/add', upload.any(), function(req, res, next) {
		db.Product.create({
	        title: req.query.title,
	        articul: req.query.articul,
	        madeIn: req.query.madeIn,
	        size: req.query.size,
	        img: req.query.img
		})

		console.log(req.query)

		res.render('product-add');
	});


	app.use('/product', router)
};