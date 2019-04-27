//login function
function login() {

    var user = firebase.auth().currentUser;
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Woops! " + errorMessage + "\nTry again!");

    });


    if (user) {
        window.location = "home";
    } else {
        window.alert("Woops! " + errorMessage + "\nTry again!");
        window.location = "/";
    }
}

//redirect to signup form
function gotoform() {
    window.location = "signupForm";
}

//sign up
function signup() {

    var bdate = document.getElementById("dob").value;
    var verAge = '2001-01-01'
    var user = firebase.auth().currentUser;
    var userEmail = document.getElementById("inputEmail").value;
    var userPass = document.getElementById("inputPassword").value;

    if (bdate > verAge) {
        window.alert("Date of birth entered is: " + bdate + ".\nYou must be 18 years of age\nor older to use this site");
    } else {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Woops! " + errorMessage + "\nTry again!");
        });

        //Redirect to homepage after successful login
        if(user){

            var email = user.email;

            window.alert("Thanks for signing up!\nA verification email has been sent to:\n" + email);
            window.location = "home";
            //send verification email to user on successful sign up
            user.sendEmailVerification().then(function() {
                // Email sent.
              }).catch(function(error) {
                // An error happened.
              });
        } else {
            window.alert("Woops! " + errorMessage + "\nTry again!");
            window.location = "signupForm";
        }
    }
}

//LOGOUT FUNCTION
function logout() {

    firebase.auth().signOut().then(function () {
        window.location("/");
    }).catch(function (error) {
        // An error happened.
    });
}