const express = require('express');
const router = express.Router();

const Coffee = require('../models/coffee.js');



router.get('/', (req, res) => {

	Coffee.find({}, (err, data) => {

		if (err) {
			console.error(err);
		}

		res.send(data);
	})
})



module.exports = router;