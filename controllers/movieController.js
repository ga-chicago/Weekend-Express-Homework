const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModels.js');

router.route('/')
	.get((req,res)=>{
		Movie.find({},(err, Movie)=>{
			if (err) console.log(err);
			res.render('index.ejs',{movies: Movie});
		})
		
})
	.post((req,res)=>{
		req.body.year = Number(req.body.year);

		Movie.create(req.body,(err,createdMovie)=>{
			console.log(createdMovie);
			res.redirect('/movies/');
		});	
})

router.get('/new/',(req,res)=>{
	res.render('new.ejs')
});

router.route('/:index')
	.get((req,res)=>{
		Movie.findById(req.params.index, (err, movie)=>{
			res.render('show.ejs',{
				movie: movie
			});
		});	
	})
	.put((req,res)=>{
		req.body.year = Number(req.body.year);
		console.log(req.params.id)
		console.log(typeof req.params.id)
		console.log('route working')
		// Movie.findByIdAndUpdate(req.params.id,req.body,(err,modelUpdate)=>{
		// 	response.redirect('/movies/');
		// })
	})
	.delete((req,res)=>{
		Movie.findByIdAndRemove(req.params.index, (err, remove)=>{
			res.redirect('/movies/');
		});
	})

router.get('/:index/edit', (req,res)=>{
	Movie.findById(req.params.index, (err, movie)=>{
		res.render('edit.ejs',{
			movie: movie
		})
	})
})

module.exports = router;