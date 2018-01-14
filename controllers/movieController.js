const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js")


// Movies Route
router.route("/")
	.get((req, res) => {
		res.send("Hit index route");
		console.log("Hit index route");
	})


// New Route
router.route("/new")
	.get((req, res) => {
		res.render("new.ejs")
	})









module.exports = router;