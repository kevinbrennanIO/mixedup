

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

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
    container.innerHTML += "Drink Name: "+ data.drinks[i]["strDrink"]+ "Drink Type: " + data.drinks[i]["strAlcoholic"]+ "Glass Type: " +data.drinks[i]["strGlass"]+ "Instructions: " +data.drinks[i]["strInstructions"]+ "Ingredients: " +data.drinks[i]["strIngredient1"]+ data.drinks[i]["strIngredient2"]+ data.drinks[i]["strIngredient3"]+ data.drinks[i]["strIngredient4"]+ data.drinks[i]["strIngredient5"]+ data.drinks[i]["strIngredient6"]+ "Measures: " +data.drinks[i]["strMeasure1"]+ data.drinks[i]["strMeasure2"]+ data.drinks[i]["strMeasure3"]+ data.drinks[i]["strMeasure4"]+ data.drinks[i]["strMeasure5"];
    
    // each element of line array is an object
    // so we can iterate over its properties
}
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Gah, its not working!';
    app.appendChild(errorMessage);
  }
}








