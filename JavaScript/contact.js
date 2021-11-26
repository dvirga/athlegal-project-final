function successful(){
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;

  if ((firstName.length < 3) || (lastName.length < 3) || (email.length < 3)){
    alert("Please review the errors and try again");
    return false;
  } else {
    alert("Thank you for submitting a request.");
  }
}

function threeCharFirst(){
    var firstName = document.getElementById('firstName').value;
 if (firstName.length < 3) {
  document.getElementById("errorFname").innerHTML = "There must be at least 3 characters";
 } else {
  document.getElementById("errorFname").innerHTML = "";
  }
}

function threeCharLast(){
    var lastName = document.getElementById('lastName').value;
 if (lastName.length < 3) {
  document.getElementById("errorLname").innerHTML = "There must be at least 3 characters";
 } else {
  document.getElementById("errorLname").innerHTML = "";
  }
}

function threeCharEmail(){
    var email = document.getElementById('email').value;
 if (email.length < 3) {
  document.getElementById("errorEmail").innerHTML = "There must be at least 3 characters";
 } else {
  document.getElementById("errorEmail").innerHTML = "";
  }
}

function threeCharMessage(){
    var message = document.getElementById('message').value;
 if (message.length < 3) {
  document.getElementById("errorMessage").innerHTML = "There must be at least 3 characters";
 } else {
  document.getElementById("errorMessage").innerHTML = "";
  }
}

//hamburger menu
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener('click', ()  => {
  navUL.classList.toggle('show');
});
