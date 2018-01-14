express = require("express");
app = express();






// Test Route

app.get("/", (req, res) => {
	res.send("Working")
})











app.listen(3000, () => {
	console.log("Listening on port 3000")
})