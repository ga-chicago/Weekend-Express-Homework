const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	region: String,
	method: {
		type: String,
		required: true
	},
	mg_caffeine: Number,
	hot: Boolean,
	img: {
		type: String,
		default: 'https://i.imgur.com/ezXQZtc.jpg'
	}
})

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;