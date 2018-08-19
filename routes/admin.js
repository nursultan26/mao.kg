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
		path: "../../../",
		cat1: ["Аксессуары","Одежда"],
		cat2: ["Мужская","Женская"],
		cat3: ["Верхная","Нижная"],
		country: ["Кыргызстан", "Россия"],
		firm: ["Nike","Adidas"],
		size: ["M","S","L","XL", "XXL"],

	}

	router.get('/', function(req, res, next) {
		res.render('add', {data});
	});

	router.get('/good', function(req, res, next) {
		res.render('add-goods', {data});
	});

	app.use('/admin/add', router)
};