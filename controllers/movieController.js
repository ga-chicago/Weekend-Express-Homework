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
				res.redirect("/movies/" + createdMovie.id)
			}
		})
	})


// New Route
router.route("/new")
	.get((req, res) => {
		res.render("new.ejs")
	})


router.route("/:id")
	.get((req, res) => {
		Movie.findById(req.params.id, (err, foundMovie) => {
			if (err) {
				console.log(err)
			} else {
				console.log(foundMovie)
				res.render("show.ejs", {
					movie: foundMovie
				})
			}
		})
	})
	.delete((req, res) => {
		console.log("started Delete")
		Movie.findByIdAndRemove(req.params.id, (err, removedFruit) => {
			if (err) {
				console.log(err)
			} else {
				console.log("hit removed route")
				res.redirect("/movies")
			}
		})
	})






module.exports = router;