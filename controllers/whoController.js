// REQUIRE NODES
const express = require('express');
const router = express.Router();



// MODEL
const Whovian = require('../models/who.js');



// NEW ROUTE
router.get('/new', (req, res) => {
	res.render('new.ejs');
})

// POST ROUTE (for the new characters)
router.post('/', (req, res) => {
	// update the friend field to actually be a boolean
	// console.log(req.body)
	if(req.body.friend === 'on') {
		req.body.friend = true;
	} else {
		req.body.friend = false;
	}

	// created the character in the database when the user submits the form
	Whovian.create(req.body, (err, createdWhovian) => {
		if(err) console.log(err);
		console.log('hit post route')
		res.redirect('/whovians')
	})

	// res.send('hit post route')
})

// INDEX ROUTE
router.get('/', (req, res) => {
	Whovian.find({}, (err, allWho) => {
		if(err) console.log(err);
		console.log('hit index route')
		// res.send('hit index route');
		res.render('index.ejs', {whovians: allWho})
	})
	
});


// STOP FORGETTING TO EXPORT
module.exports = router;