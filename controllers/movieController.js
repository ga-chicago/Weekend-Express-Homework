const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js")


router.route("/")
	.get((req, res) => {
		res.send("Hit index route");
		console.log("Hit index route");
	})








module.exports = router;