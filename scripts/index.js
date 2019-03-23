
var express = require("express"); // call the express module which is default provided by Node

var app = express(); // now we need to declare our app which is the invoked express application

// set up simple hello world application using the request and response function
app.get('/', function(req, res) {
res.send("Hello World"); // we set the response to send back the string hello world
console.log("Site was acceesed"); // used to output activity in the console
});

// this code provides the server port for our application to run on
app.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", function() {
console.log("Yippee its running");
  
});
