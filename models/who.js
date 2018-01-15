const mongoose = require('mongoose');

// create the Schema
const whoSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	species: String,
	birthDate: Date,
	skills: [String],
	friend: Boolean,
	seasons: Number

});

// create the model
const Whovian = mongoose.model('Whovian', whoSchema);

// export the model
module.exports = Whovian;