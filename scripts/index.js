
var express = require("express");              // call the express module which is default provided by Node

var app = express();                           // now we need to declare our app which is the invoked express application

require('dotenv').config(); 
const path  = require('path');
const VIEWS = path.join(__dirname, "views");
app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("scripts"));
app.set("view engine", "ejs");
app.use(express.static("scripts"));

var mysql = require('mysql');
const http = require('http');




    app.get('views/randomgen', function (req, res,ejs) {
        res.sendFile(path.join(__dirname+'views/randomgen.ejs'));
       });



// direct application to the root page (index)
app.get('/', function(req, res) {
    res.render("index",{ROOT: "views"}); 
console.log("Site was acceesed");            
});

// direct application to the signup page (signupForm)
app.get("/signupForm", function(req, res) {
    res.render("signupForm",{ROOT: "views"}); 
    console.log("/signup form was acceesed");  
});

// direct application to the home page (home)
app.get("/home", function(req, res) {
    res.render("home",{ROOT: "views"}); 
    console.log("/home was accessed");  
});

  
// direct application to the signup page (signupForm)
app.get("/signupForm", function(req, res) {
    res.render("signupForm",{ROOT: "views"}); 
    console.log("/signup form was acceesed");  
});


// direct application to the top picks page 
app.get("/picks", function(req, res) {
    res.render("picks",{ROOT: "views"}); 
    console.log("/picks was acceesed");  
});


// direct application to the top picks page 
app.get("/drinks", function(req, res) {
    res.render("drinks",{ROOT: "views"}); 
    console.log("/drinks was acceesed");  

});

// direct application to the top picks page 

app.get("/randomgen", function(req, res) {
    res.render("randomgen",{ROOT: "views"}); 
    console.log("/randomgen was acceesed");  

});

// direct application to the top picks page 
app.get("/privacy", function(req, res) {
    res.render("privacy",{ROOT: "views"}); 
    console.log("/privacy was acceesed");  

});

//MYSQL Connection
var db = mysql.createConnection({
    host: process.env.GH_HOST,
    user: process.env.GH_USER,
    password: process.env.GH_PASSWD,
    database: process.env.GH_DB,
});
db.connect(function (err) {
    if (!err) {
        console.log("[status] Connected to mySQL database ... \n");
    } else {
        console.log("[status] Error connecting to SQL ... ");
    }
});


app.get('/games', function (req, res) {
    var gameList = [];
    let sql = 'SELECT * FROM games';

    db.query(sql, (err, rows) => {  
        if (err) throw err;
        db.on('error', function(err) {
            console.log("[mysql error]",err);
          });
        


        for (var i = 0; i < rows.length; i++) {
            console.log(i);

            // Create an object to save current row's data
            var game = {
                
                'GameName': rows[i].GameName,
                'Required': rows[i].Required,
                'Step1': rows[i].Step1,
                'Step2': rows[i].Step2,
                'Step3': rows[i].Step3,
                'image': rows[i].image,
                'game_id': rows[i].game_id,

            }
            
            // Add object into array
            gameList.push(game);
            
        }
    

        // Render to games.ejs page using array 

        res.render('games.ejs', { gameList: gameList });
        
    });
});




 

    // this code provides the server port for our application to run on

app.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", function() {
    console.log("Yippee its running");
      

});