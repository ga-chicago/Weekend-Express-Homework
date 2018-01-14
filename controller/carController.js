const express = require('express');
const router = express.Router();
const Car = require('../models/cars.js')


// this is the home route 
router.get('/', (req,res)=>{
  // search the database
  Car.find({}, (err, allCars)=>{
    if(err)console.log(err);
    // console.log(allCars);
    res.render('index.ejs', {cars: allCars});
  });
});


// this is the route to make a new car
router.get('/new', (req,res)=>{
  res.render('../views/new.ejs');
});


// this is the post route to make the new car form work
router.post('/', (req,res)=>{
  Car.create(req.body, (err, createdCar)=>{
  // res.send(createdCar);
  console.error(err);
  res.redirect('/cars');
  });
});


// delete route
router.delete('/:id', (req,res)=>{
  Car.findByIdAndRemove(req.params.id, (err, data)=>{
    if(err){
      console.log(err);
    }else{
      res.redirect('/cars');
      // res.send(req.params.id);
      // console.log(data);
    }
  });
});

module.exports = router;