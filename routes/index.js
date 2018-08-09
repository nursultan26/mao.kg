var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app) {
	
	router.get('/', function(req, res, next) {
		res.render('index');
	});

	app.use('/', router)
};