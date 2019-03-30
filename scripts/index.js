
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





/////////////////// SHANE JAVASCRIPT /////////////////////////

const apple = document.getElementById('shane-content');

const container = document.createElement('div');
container.setAttribute('class', 'container');


apple.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', true);
request.send();
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data.drinks[0]["strDrink"]);
   // window.alert(data["strDrink"])
  if (request.status >= 200 && request.status < 400) {
for (var i = 0; i < data.drinks.length; i++) {
    // key here is the index of line array
   
    container.innerHTML += "Drink Name: "+ data.drinks[i]["strDrink"]+ "<br>Drink Type: " + data.drinks[i]["strAlcoholic"]+ "<br>Glass Type: " +data.drinks[i]["strGlass"]+ "<br>Instructions: " +data.drinks[i]["strInstructions"]+ "Ingredients: " +data.drinks[i]["strIngredient1"]+ data.drinks[i]["strIngredient2"]+ data.drinks[i]["strIngredient3"]+ data.drinks[i]["strIngredient4"]+ data.drinks[i]["strIngredient5"]+ data.drinks[i]["strIngredient6"]+ "<br>Measures: " +data.drinks[i]["strMeasure1"]+ data.drinks[i]["strMeasure2"]+ data.drinks[i]["strMeasure3"]+ data.drinks[i]["strMeasure4"]+ data.drinks[i]["strMeasure5"];
    
    // each element of line array is an object
    // so we can iterate over its properties
}
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Gah, its not working!';
    apple.appendChild(errorMessage);
  }
}











// this code provides the server port for our application to run on
app.listen(process.env.PORT || 4000, process.env.IP || "0.0.0.0", function() {
console.log("Yippee its running");
  
});
