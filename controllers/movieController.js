const express = require("express");
const router = express.Router();
const Movie = require("../models/movie.js")


// Movies Route
router.route("/")
	.get((req, res) => {
		Movie.find({}, (err, allMovies) => {
			if (err) {
				console.log(err);
			} else {
				res.render("index.ejs", {
					movies: allMovies
				})
			}
		})
	})
	.post((req ,res) => {
		if (req.body.hasBeenWatched === "on") {
			req.body.hasBeenWatched = true;
		} else {
			req.body.hasBeenWatched = false;
		}
		Movie.create(req.body, (err, createdMovie) => {
			if (err) {
				console.log(err);
			} else {
				// res.send(createdMovie)
				res.redirect("/movies")
			}
		})
	})


// New Route
router.route("/new")
	.get((req, res) => {
		res.render("new.ejs")
	})









module.exports = router;