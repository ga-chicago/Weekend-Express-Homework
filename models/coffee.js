const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	region: String,
	brewed: String,
	mg_caffeine: Number,
	hot: Boolean
})

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;