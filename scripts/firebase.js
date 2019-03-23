
  //AUTH STATE CHANGE - USER LOGGED IN OR OUT?
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //is signed in
        console.log("You're in!!");
        //window.location.href = "home.html";
    } else {
        //no user signed in
        console.log("You're Gone!!");
    }
});

//login function
function login(){
    //get the entered email and password
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value; 

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error: " + error.message);

        });
    //redirect after login
    window.location = "home.html";
}

//log out -- UNFINISHED!!!
function logout(){
    firebase.auth().signOut();
    window.location = "index.html";
}

//redirect to signup form
function gotoform(){
   window.location = "signupForm.html";
}

//sign up
function signup(){
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;  
        
        window.alert("Error: " + error.message);
      });
      //redirect after signup
      window.location = "home.html";
    }
