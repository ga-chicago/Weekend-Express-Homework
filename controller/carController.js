const express = require('express');
const router = express.Router();
const Car = require('../models/cars.js')


// cars path 
router.get('/', (req,res)=>{
 // search the database
 Car.find({}, (err, allCars)=>{
   if(err)console.log(err);
   // console.log(allCars);
   res.render('index.ejs', {cars: allCars});
 });
});

// path for the new car form
router.get('/new', (req,res)=>{
  res.render('../views/new.ejs');
});


router.post('/', (req,res)=>{
  Car.create(req.body, (err, createdCar)=>{
  // res.send(createdCar);
  console.error(err)
  res.redirect('/cars')
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



// show route
router.get('/:id', (req, res)=>{
  Car.findById(req.params.id, (err, carFound)=>{
    res.render('show.ejs', {car: carFound});
  });
});

// edit route
router.get('/:id/edit', (req,res)=>{
  Car.findById(req.params.id, (err, car)=>{
    res.render('edit.ejs', {car:car})
  });
  router.put('/id', (req,res)=>{
    console.log(req.body, 'reqbody')
  });
});


module.exports = router; 
