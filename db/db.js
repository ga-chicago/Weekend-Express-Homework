const mongoose = require('mongoose');

// const Movies = require('../models/movieModels.js');
// const movieData = require('../populateMovies.js');

mongoose.connect('mongodb://localhost:27017/movies',{useMongoClient: true});

mongoose.connection.once('open', ()=>{
	console.log('Database connected on 27017');
})

mongoose.connection.on('disconnected', () => {
	console.log('database disconnected');
})

mongoose.connection.on('error', () => {
	console.log('there was an error connecting', error);
})

// Populate database
// Movies.collection.insertMany(movieData,(err, data) => {
//     mongoose.connection.close();
// });