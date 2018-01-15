const mongoose = require('mongoose');

const criminalSchema = new mongoose.Schema({
	name: {type: String},
	primaryAttribute: {type: String},
	 
})

const Sergio = mongoose.model('Sergio', sergioSchema);

module.exports = Sergio; 