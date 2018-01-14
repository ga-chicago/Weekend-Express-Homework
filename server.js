express = require("express");
app = express();
require("./db/db.js")








const movieController = require("./controllers/movieController.js");
app.use("/movies", movieController)


// Test Route
// app.get("/", (req, res) => {
// 	res.send("Working")
// })











app.listen(3000, () => {
	console.log("Listening on port 3000")
})