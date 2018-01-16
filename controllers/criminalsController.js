
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
	//
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

// all methods for "/criminals/new"
router.route("/new")
	// this function creates new criminals in the NEW page
	.get((req, res) => { // New Route
		res.render("new.ejs")
	})


router.get('*', (req,res)=>{
	res.send("your route is messed up")
})

module.exports = router;
