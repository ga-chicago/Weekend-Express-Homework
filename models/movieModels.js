const mongoose = require('mongoose');
// Create schema
const movieSchema = new mongoose.Schema({
	name: {type: String, required: true },
	year: Number,
	img: String,
	genre: String
})
// Create model
const Movie = mongoose.model('Movie', movieSchema);
// Export the model
module.exports = Movie;