const express = require('express');
const router = express.Router();
const movies = require('../models/movieModels.js');

router.route('/')
	.get((req,res)=>{
		res.render('index.ejs', {movies: movies})
})
	.post((req,res)=>{
		
})


router.get('/new',(req,res)=>{
	
});

router.route('/:index')
	.get((req,res)=>{
			
	})
	.put((req,res)=>{
		
})
	.delete((req,res)=>{
		
})

router.get('/:index/edit', (req,res)=>{
	
})

module.exports = router;