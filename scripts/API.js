const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/random.php', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data.drinks[0]["strDrink"]);
   // window.alert(data["strDrink"])
  if (request.status >= 200 && request.status < 400) {
for (var i = 0; i < data.drinks.length; i++) {
    // key here is the index of line array
       container.innerHTML += "Drink Name: "+ data.drinks[i]["strDrink"];
    // each element of line array is an object
    // so we can iterate over its properties
}
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Gah, its not working!';
    app.appendChild(errorMessage);
  }
}

request.send();