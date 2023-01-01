var video = document.getElementById("myVideo");

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      window.open("/vote.html");
      document.getElementById("login_div").style.display = "none";
  
    } else {
      console.log("lol")
    }
  });
  
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  
  function logout(){
    firebase.auth().signOut();
  }
