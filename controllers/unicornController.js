const express = require('express');
//Router has all get, post, edit, delete methods
const router = express.Router();

// model should be capitalized** .. go up a level
const Unicorn = require('../models/unicorns.js');


// new route
router.get('/new', (req, res) =>{
    res.render('new.ejs')
});

// create ROute
router.post('/', (req, res) =>{
    if(req.body.hungry === 'on'){
        req.body.hungry = true;
    }else{
        req.body.hungry = false;
    }
    // add this fruit to db using __ method of the Fruit obj
    Unicorn.create(req.body, (err, createdFruit) =>{
        //redirect back to index after clicking add fruit on new page
        res.redirect('/unicorns')
    })
});

//show route
//how to find fruit -> need param in this case ":id"
router.get('/:id', (req,res) =>{
    //get fruit from db
    // req.params is same parameter :id
    Unicorn.findById(req.params.id,(err, fruitFound) =>{
        //render show page
        res.render('show.ejs', { unicorn: fruitFound })


    })
});

// unicorns is now index.ejs page
router.get('/', (req,res) =>{
    //get all unicorns from db
    //find all unicorns in obj
    Unicorn.find({}, (err, allUnicorns) =>{
        if(err) console.log(err);
        console.log(allUnicorns);
        // allUnicorns contains all unicorn data
        res.render('index.ejs', { unicorns : allUnicorns })
    });
});


//delete route
router.delete('/:id', (req, res) => {
    // // string is whatever mongo gets
    // console.log(req.body, 'req.body', req.params);
    // res.send('deleted')
    Unicorn.findByIdAndRemove(req.params.id, (err, unicorn) =>{
        if(err){
            console.log(err)
        } else{
            console.log(unicorn, ' delete obj ');
            res.redirect('/unicorns')
        }
    });
});

//One route for displaying the edit page, GET
router.get('/:id/edit', (req,res) =>{
    // res.send('you hit the edit route')

    Unicorn.findById(req.params.id, (err,unicorn) =>{
        res.render('edit.ejs', {
            unicorn: unicorn
        })
    })
});
//One route for editing, the PUT route
//need id to update something
router.put('/:id', (req,res) =>{
    console.log(req.body, ' req.body ', req.params);

    if(req.body.hungry === 'on'){
        req.body.hungry = true;
    }else{
        req.body.hungry = false;
    }
    //first param what you want to update the second is what you want to replace it with
    //--both params can be named whatever
    Unicorn.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel) =>{
        res.redirect('/unicorns')
    })
});








module.exports = router;