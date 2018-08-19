
var express = require('express');
var router = express.Router();
var config = require('../config')
var fs = require('fs')
/* libraries for photo upload */
var multer = require('multer');
var upload = multer({dest: './public/img'});



/* GET home page. */
module.exports = function(app, db) {

	var data = {
		path: "../../"
	}
	/*var cat1,
			cat2,
			cat3

	db.Category_1.findAll({
	}).then(cat => {
		cat1 = cat
	})
	db.Category_2.findAll({
	}).then(cat => {
		cat2 = cat
	})
	db.Category_3.findAll({
	}).then(cat => {
		cat3 = cat
	})*/

	router.get('/all', function(req, res, next) {
		res.render('catalog', {data});
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
		res.redirect('/');
	});



	app.use('/goods', router)
};