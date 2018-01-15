const express= require('express');
const app = express();
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

require('./database/db.js');

//MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride('_method'));

//to get the controller --place after middleware
const UnicornController = require('./controllers/unicornController.js');

app.use('/unicorns', UnicornController);

//MODELS
const Unicorn = require('./models/unicorns.js');


app.listen(3000, () =>{
    console.log("Server is listening on port 3000")
});