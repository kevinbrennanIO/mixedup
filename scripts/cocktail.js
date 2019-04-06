var apple = document.getElementById('root');

var address = 'https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i='
 
var api = address




var namesArray = new Array("gin","vodka","rum"); //array
var resultString = ""; // result variable

//iterate each item of array
for (var i = 0; i < namesArray.length; i++) 
     resultString += namesArray[i] + ",";

//remove the extra comma at the end, using a regex
resultString = resultString.replace(/,(?=[^,]*$)/, '')

alert(address+resultString); 

// for ( var index = 0; index < inputs.length; ++index ) {
//     var empty;
//     var check = inputs[index];
//     var arr = empty.append(inputs[index])
//     // console.log(inputs[index]);
//     console.log(check);
//     console.log(arr);
// }

// inputs.forEach(function(getItem){
//     console.log(getItem) + seperator;
// });

var request = new XMLHttpRequest();
request.open('GET', api , true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    console.log(this.response);
    console.log(data.drinks[0]["strDrink"]);
   // window.alert(data["strDrink"])
  if (request.status >= 200 && request.status < 400) {
for (var i = 0; i < data.drinks.length; i++) {
    // key here is the index of line array
       apple.innerHTML += data.drinks[i]["strDrink"];
    // each element of line array is an object
    // so we can iterate over its properties
}
  } else {
    alert('error');
  }
}

request.send();






// for (var i = 0; i < data.drinks.length; i++) {
//   // key here is the index of line array
//      apple.innerHTML += "Drink Name: "+ data.drinks[i]["strDrink"];
//   // each element of line array is an object
//   // so we can iterate over its properties
// }
// } else {
//   alert('error');
// }
// }

// request.send();