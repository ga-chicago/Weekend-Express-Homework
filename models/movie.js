const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
	title: {
		type: String,
		require: true,
		unique: true
	},
	yearReleased: {
		type: Number,
		require: true
	},
	hasBeenWatched: Boolean
})


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;