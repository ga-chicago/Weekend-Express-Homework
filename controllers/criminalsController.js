
const express = require('express');

const router = express.Router();


// MODELS
const Fruit = require('../models/criminals.js')

router.get('/', (req,res)=>{
	res.send("your route works on '/'")
})


router.get('*', (req,res)=>{
	res.send("your route is messed up")
})

module.exports = router;
