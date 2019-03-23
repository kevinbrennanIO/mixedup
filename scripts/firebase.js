
  //AUTH STATE CHANGE - USER LOGGED IN OR OUT?
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        //is signed in
        window.alert("You're in!!");
        //window.location.href = "home.html";
    } else {
        //no user signed in
        window.alert("Sorry!!!");
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

    });

}

//handle account status
firebase.auth().onAuthStateChanged(user => {
    if(user){
        window.location = "home.html";
    }
});

//log out
function logout(){
    firebase.auth().signOut();
}

//redirect to signup form
function gotoform(){
   window.location = "signupForm.html";
}

//sign up
function signup(){
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;        
        window.alert("Error: " + error.message);
      });

      }
