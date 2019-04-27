var txt = "image";

function apiCall() {

  var request = new XMLHttpRequest();
  request.open('GET', callToApi, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    // window.alert(data["strDrink"])
    if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.drinks.length; i++) {

        // key here is the index of line array
        apple.innerHTML += "<br/>Drink Name: " + data.drinks[i]["strDrink"] +
          "<br/>Drink_ID: " + data.drinks[i]["idDrink"] +
          "<br/>" + ("<p>Image: " + txt.link(data.drinks[i]["strDrinkThumb"]) + "</p>");
        "<br/>"
        // each element of line array is an object
        // so we can iterate over its properties
      }
    } else {
      alert('error');
    }
  }
  request.send();

}




var callToApi;

var apple = document.getElementById('root');
var apple2 = document.getElementById('root2');

var address = 'https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i='

var api = address

var namesArray = new Array(); //array
var resultString = ""; // result variable


function callIng() {

  var ing1 = document.getElementById("ingredient1").value;
  var ing2 = document.getElementById("ingredient2").value;
  var ing3 = document.getElementById("ingredient3").value;
  var ing4 = document.getElementById("ingredient4").value;

  namesArray.push(ing1);
  namesArray.push(ing2);
  namesArray.push(ing3);
  namesArray.push(ing4);



  for (var i = 0; i < namesArray.length; i++)
    resultString += namesArray[i] + ",";
  //remove the extra comma at the end, using a regex
  resultString = resultString.replace(/,(?=[^,]*$)/, '')


  //var callToApi = address+resultString;
  callToApi = address + resultString;

  apiCall()

}

/*-------Drink-Type---------*/
ginApi = "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=Gin";
rumApi = "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=Rum";
vodkaApi = "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=Vodka";
whiskeyApi = "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=Whiskey";
tequilaApi = "https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=Tequila";

function Gin() {

  var request = new XMLHttpRequest();
  request.open('GET', ginApi, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    // window.alert(data["strDrink"])
    if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.drinks.length; i++) {

        // key here is the index of line array
        apple2.innerHTML += "<br/>Drink Name: " + data.drinks[i]["strDrink"] +
          "<br/>Drink_ID: " + data.drinks[i]["idDrink"] +
          "<br/>" + ("<p>picture: " + txt.link(data.drinks[i]["strDrinkThumb"]) + "</p>");
        "<br/>"
        // each element of line array is an object
        // so we can iterate over its properties
      }
    } else {
      alert('error');
    }
  }
  request.send();

}

function Rum() {

  var request = new XMLHttpRequest();
  request.open('GET', rumApi, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    // window.alert(data["strDrink"])
    if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.drinks.length; i++) {

        // key here is the index of line array
        apple2.innerHTML += "<br/>Drink Name: " + data.drinks[i]["strDrink"] +
          "<br/>Drink_ID: " + data.drinks[i]["idDrink"] +
          "<br/>" + ("<p>picture: " + txt.link(data.drinks[i]["strDrinkThumb"]) + "</p>");
        "<br/>"
        // each element of line array is an object
        // so we can iterate over its properties
      }
    } else {
      alert('error');
    }
  }
  request.send();

}

function Vodka() {

  var request = new XMLHttpRequest();
  request.open('GET', vodkaApi, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    // window.alert(data["strDrink"])
    if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.drinks.length; i++) {

        // key here is the index of line array
        apple2.innerHTML += "<br/>Drink Name: " + data.drinks[i]["strDrink"] +
          "<br/>Drink_ID: " + data.drinks[i]["idDrink"] +
          "<br/>" + ("<p>picture: " + txt.link(data.drinks[i]["strDrinkThumb"]) + "</p>");
        "<br/>"
        // each element of line array is an object
        // so we can iterate over its properties
      }
    } else {
      alert('error');
    }
  }
  request.send();

}

function Whiskey() {

  var request = new XMLHttpRequest();
  request.open('GET', whiskeyApi, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    // window.alert(data["strDrink"])
    if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.drinks.length; i++) {

        // key here is the index of line array
        apple2.innerHTML += "<br/>Drink Name: " + data.drinks[i]["strDrink"] +
          "<br/>Drink_ID: " + data.drinks[i]["idDrink"] +
          "<br/>" + ("<p>picture: " + txt.link(data.drinks[i]["strDrinkThumb"]) + "</p>");
        "<br/>"
        // each element of line array is an object
        // so we can iterate over its properties
      }
    } else {
      alert('error');
    }
  }
  request.send();

}

function Tequila() {

  var request = new XMLHttpRequest();
  request.open('GET', tequilaApi, true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data);
    // window.alert(data["strDrink"])
    if (request.status >= 200 && request.status < 400) {
      for (var i = 0; i < data.drinks.length; i++) {

        // key here is the index of line array
        apple2.innerHTML += "<br/>Drink Name: " + data.drinks[i]["strDrink"] +
          "<br/>Drink_ID: " + data.drinks[i]["idDrink"] +
          "<br/>" + ("<p>picture: " + txt.link(data.drinks[i]["strDrinkThumb"]) + "</p>");
        "<br/>"
        // each element of line array is an object
        // so we can iterate over its properties
      }
    } else {
      alert('error');
    }
  }
  request.send();

}