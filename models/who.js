const mongoose = require('mongoose');

// create the Schema
const whoSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	species: String,
	birthDate: Date,
	skills: [String],
	seasons: Number

});

// create the model
const Whovian = mongoose.model('Whovian', whoSchema);

// export the model
module.exports = Whovian;