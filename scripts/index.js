
var express = require("express");              // call the express module which is default provided by Node

var app = express();                           // now we need to declare our app which is the invoked express application

require('dotenv').config({ path: '/Users/kevinbrennan/Desktop/mixedup/vars.env' }); 
const path  = require('path');
const VIEWS = path.join(__dirname, 'views');
app.use(express.static("css"));
app.use(express.static("images"));
app.set("view engine", "ejs");

// direct application to the root page (index)
app.get('/', function(req, res) {
    res.render("index",{ROOT: "views"}); 
console.log("Site was acceesed");            
});

// direct application to the home page (home)
app.get("/home", function(req, res) {
    res.render("home",{ROOT: "views"}); 
    console.log("/home was acceesed");  
});

// this code provides the server port for our application to run on
app.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", function() {
console.log("Yippee its running");
  
});
