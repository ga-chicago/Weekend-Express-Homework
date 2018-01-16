// REQUIRE NODES
const express = require('express');
const router = express.Router();



// MODEL
const Whovian = require('../models/who.js');



// NEW ROUTE (give the user the form to add characters)
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

// SHOW ROUTE
router.get('/:id', (req, res) => {
	// get the information on that character
	Whovian.findById(req.params.id, (err, foundWhovian) => {
		if(err) console.log(err);
		res.render('show.ejs', { whovian: foundWhovian})
	})
});

// EDIT ROUTE (give the user the form to add characters)
router.get('/:id/edit', (req, res) => {
	Whovian.findById(req.params.id, (err, foundWhovian) => { 
		if(err) console.log(err);
		res.render('edit.ejs', { whovian: foundWhovian });
	})
})

// UPDATE
router.put('/:id', (req, res) => {
	// create boolean in friend field
	if(req.body.friend === 'on') {
		req.body.friend = true;
	} else {
		req.body.friend = false;
	}

	// copying what Jim did in class and just passing req.body as the new object! (I typed it all out before)
	Whovian.findByIdAndUpdate(req.params.id, 
		req.body, 
		(err, updatedModel) => {
			if(err) console.log(err);
			res.redirect('/whovians')
	})
})

// DELETE ROUTE


// STOP FORGETTING TO EXPORT
module.exports = router;