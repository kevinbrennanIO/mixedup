      //login function
      function login(){

        // get the entered email and password
        var user = firebase.auth().currentUser;
        var userEmail = document.getElementById("inputEmail").value;
        var userPass = document.getElementById("inputPassword").value; 
        
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
        
                window.alert("Woops! " + errorMessage + "\nTry again!");            
        
            });

            if(user){
                window.location = "home";
            }
            else{
                window.alert("Woops! " + errorMessage + "\nTry again!");
                window.location = "/";
            }
        
        }

//redirect to signup form
function gotoform(){
   window.location = "signupForm";
}

//sign up
function signup(){
    
    var user = firebase.auth().currentUser;
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Woops! " + errorMessage + "\nTry again!");
    });

    //Redirect to homepage after successful login
    if(user){
        window.location = "home";
    }
    else{
        window.alert("Woops! " + errorMessage + "\nTry again!");
        window.location = "signupForm";
    }
}

//LOGOUT FUNCTION
function logout(){

    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location("/");
      }).catch(function(error) {
        // An error happened.
      });
    }
