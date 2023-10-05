//require express
const express = require("express");
//instantiate express
const app = express();

//serve files in the public folder
app.use(express.static("./public"));

//When the client sends a get request to the / endpoint, send the /src/pages/index.html file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//When the client sends a post request to the / endpoint, send the /src/pages/submitted.html file
app.post("/", function(req, res) {
  alert("wow it worked");
});

//make sure the server is listening on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
