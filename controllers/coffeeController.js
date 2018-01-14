const express = require('express');
const router = express.Router();

const Coffee = require('../models/coffee.js');



router.get('/', (req, res) => {

	Coffee.find({}, (err, data) => {

		console.log(data);

		if (err) {
			console.error(err);
		}

		res.render('index.ejs', {
			coffee: data
		})
	});
});



module.exports = router;















	// Coffee.create({
	// 	name: 'Americano',
	// 	region: 'Italy',
	// 	method: 'Espresso is diluted with hot water.',
	// 	mg_caffeine: 60,
	// 	hot: true
	// },
	// (err, data) => {
	// 	console.log(data);
	// })

	// Coffee.create({
	// 	name: 'Mocha',
	// 	region: 'Yemen',
	// 	method: 'Either chocolate syrup or powder is added to Espresso.',
	// 	mg_caffeine: 85,
	// 	hot: true
	// },
	// (err, data) => {
	// 	console.log(data);
	// })

	// Coffee.create({
	// 	name: 'Cappucccino',
	// 	region: 'Italy',
	// 	method: 'Steamed milk is added to a double shot of Espresso.',
	// 	mg_caffeine: 75,
	// 	hot: true
	// },
	// (err, data) => {
	// 	console.log(data);
	// })

	// Coffee.create({
	// 	name: 'Frappe',
	// 	region: 'Greece',
	// 	method: 'Instant coffee is mixed with water, sugar, and optionally milk.',
	// 	mg_caffeine: 50,
	// 	hot: false
	// },
	// (err, data) => {
	// 	console.log(data);
	// })