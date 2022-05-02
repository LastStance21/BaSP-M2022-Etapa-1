  var usernameInput = document.getElementById("username");
  var errorUsername = document.getElementById("errorUsername");
  var errorPassword = document.getElementById("errorpsswd");
  var passwordCall = document.getElementById("passworD");
  var emailError = "";
  var passwordError = "";
  var validationMessageLogin = "";
  var buttonLogin = document.querySelector('input[type="submit"]');
  function emailValidation(input) {
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(input);
}

function validation(param) {
  var arrayLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var letters = 0;
  var numbers = 0;
  for (let i = 0; i < param.length; i++) {
    if (arrayLetters.includes(param[i].toLocaleLowerCase())) {
      letters++;
    } else {
      Number.isInteger(param)
      numbers++;
    }
  }
  if (param.length < 8 || letters <= 0 || numbers <= 0) {
    return false
  }
    return true
}
window.onload = function () {
  usernameInput.addEventListener("blur", usernameMessage);
  function usernameMessage() {
    if (!emailValidation(usernameInput.value)) {
      errorUsername.style.display="flex";
      emailError = errorUsername.textContent;
    } else {
      emailError = usernameInput.value;
    }
  }
  usernameInput.addEventListener("focus", function() {
    errorUsername.style.display="none";
  })

  passwordCall.addEventListener("blur", passwordMessage);
  function passwordMessage() {
    if (validation(passwordCall.value) == false) {
      errorPassword.style.display="flex";
      passwordError = errorPassword.textContent;
    } else {
      passwordError = passwordCall.value;
    }
  }
  passwordCall.addEventListener("focus", function() {
    errorPassword.style.display="none";
  })
  
  var buttonForgotPassword = document.querySelector('a[class="fgtpaswd"]');
  buttonForgotPassword.addEventListener("click", clickForgot);
  function clickForgot() {
    if (!emailValidation(usernameInput.value)){
      alert ("Please enter valid e-mail");
    } else {
      alert ("New password sent to your e-mail, please confirm at" + "\n" + usernameInput.value)
    }
  }
  function forminputsOk() {
    return emailValidation(emailInput.value) && validation (passwordInput.value) &&
    passwordInput.value.length > 7;
  }
  function serverRequest() {
      if (forminputsOk()) {
      fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' +
              emailInput.value + '&password=' + passworInput.value)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
              alert(validationMessageLogin + '\n' + data.msg);
          })
          .catch(function (error) {
              alert(error.msg);
          });

      // } else {
      //     alert('Request rejected!\nOne or more inputs are not valid.\n' +
      //         validationMessageLogin +
      //         '\nCheck the inputs errors before continue!')

    }
  }
  buttonLogin.addEventListener("click", clickLogin);
  function clickLogin() {
    // alert ("Email: " + emailError + "\nPassword: " + passwordError)
    serverRequest();
  }
}

