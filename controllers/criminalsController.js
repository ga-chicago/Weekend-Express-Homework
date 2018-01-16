
const express = require('express');

const router = express.Router();


// MODELS
const Criminals = require('../models/criminals.js')

// router.get('/', (req,res)=>{
// 	res.send("your route works on '/'")
// })

// all methods for "/criminals/"
router.route("/")
	// this function displays all criminals on the INDEX page
	.get((req, res) => {
		Criminals.find({}, (err, allCriminals) => {
			if (err) {
				console.error("err")
			} else {
			    console.log(allCriminals)
			}

			res.render("index.ejs", {
			criminals: allCriminals
			})
		})
	}) 	
	// creates new criminals in a post request
	.post((req, res) => {
		if (req.body.inPrison === "on") {
			req.body.inPrison = true;
		} else {
			req.body.inPrison = false;
		}
		Criminals.create(req.body, (err, createdCriminal) => {
			if (err) {
				console.error(err)
			} else {
				console.log(createdCriminal, "req.body", req.body)
				res.redirect("/criminals")
			}
		})
	})

// all methods for NEW route
router.route("/new")
	// this function creates new criminals in the NEW page
	.get((req, res) => { // New Route
		res.render("new.ejs")
	})


// this is for SHOW route
router.route('/:id')
	// this function shows criminals by Id
	.get((req,res) => {

		Criminals.findById(req.params.id, (err, fruitFound)=> {
			if (err) {
				console.log(err)
			} else {
				res.render('show.ejs', {
					fruit: fruitFound
				})
			}
			
		})
	})

// this is for the EDIT route
router.route("/:id/edit")
	// this function finds the criminal by Id and edits it
    .get((req, res) => {
		Criminals.findById(req.params.id, (err, criminalFound) => {
			if (err) {
				console.log(err)
			} else {
				res.render("edit.ejs", {
					criminal: criminalFound
				})	
			}
		})
	})




router.get('*', (req,res)=>{
	res.send("your route is messed up")
})

module.exports = router;
