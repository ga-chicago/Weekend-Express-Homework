const mongoose = require('mongoose');

const criminalsSchema = new mongoose.Schema({
	name: {type: String, require: true},
	crime: {type: String, require: true},
	inPrison: Boolean

	 
})

const Criminals = mongoose.model('Criminals', criminalsSchema);

module.exports = Criminals; 