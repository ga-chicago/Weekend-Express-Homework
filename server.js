express = require("express");
app = express();
require("./db/db.js")
const methodOverride = require("method-override");
const bodyParser = require("body-parser");



app.use(express.static("public"));

app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(methodOverride("_method"));



const movieController = require("./controllers/movieController.js");
app.use("/movies", movieController)




app.listen(3000, () => {
	console.log("Listening on port 3000")
})