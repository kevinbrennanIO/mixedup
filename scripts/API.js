
 const app2 = document.getElementById('rdmDrink');
 
var request = new XMLHttpRequest();
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php' , true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data.drinks[0]["strDrink"]);
   // window.alert(data["strDrink"])
  if (request.status >= 200 && request.status < 400) {
for (var i = 0; i < data.drinks.length; i++) {
    // key here is the index of line array

       

      app2.innerHTML += "<b>Drink Name :</b> "+ data.drinks[i]["strDrink"]+ "<br><br> <b>Drink Type : </b>" + data.drinks[i]["strAlcoholic"]+ "<br><br> <b>Glass Type : </b> " +data.drinks[i]["strGlass"]+ "<br><br> <b>Instructions :</b> " +data.drinks[i]["strInstructions"]+ "<br><br> <b>Ingredients :</b> " +data.drinks[i]["strIngredient1"]+ ", "+data.drinks[i]["strIngredient2"]+ ", "+ data.drinks[i]["strIngredient3"]+ data.drinks[i]["strIngredient4"]+ data.drinks[i]["strIngredient5"]+ data.drinks[i]["strIngredient6"]+ "<br><br> <b>Measures : </b>" +data.drinks[i]["strMeasure1"]+ ", "+ data.drinks[i]["strMeasure2"]+ ", "+ data.drinks[i]["strMeasure3"]+ data.drinks[i]["strMeasure4"]+ data.drinks[i]["strMeasure5"];

     

    
    // each element of line array is an object
    // so we can iterate over its properties
}
  } else {
    alert('error');
  }
}

request.send();


