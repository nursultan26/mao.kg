var express = require('express');
var router = express.Router();

/* GET home page. */
module.exports = function(app, db) {
	var data = {}
	router.('/', function(req, res, next) {
		db.Models.Good.findAll()
		.then(goods => {		
			data.goods = goods
			console.log(data)
			res.send(data);
		})
	});

	router.post('/category', function(req, res, next) {
		db.Models.Link_category.findAll({
			where:{

			}
		})
		.then(goods => {		
			data.goods = goods
			console.log(data)
			res.send(data);
		})
	});

	app.use('/api/', router)
};  