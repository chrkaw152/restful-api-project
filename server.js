//require express
const express = require("express");
//instantiate express
const app = express();

//When the client sends a get request to the / endpoint, send the /src/pages/index.html file

//make sure the server is listening on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
