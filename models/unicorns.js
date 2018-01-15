const mongoose = require('mongoose');

//create schema
const unicornSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    hungry: Boolean,
});

//create model
const Unicorn = mongoose.model('Unicorn', unicornSchema);

module.exports = Unicorn;