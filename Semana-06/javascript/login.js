window.onload = function () {
  var userInput = document.getElementById("username");
  var loginButton = document.getElementById("login");
  var errorMessage = document.getElementById("errorUsername");

  function validateEmail(value) {
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value) && value !== "") {
      userInput.style = "border: 1px solid red;";
      errorMessage.style = "display: flex; color: red;";
    } else {
      userInput.style = "border: 1px solid green;";
      errorMessage.style = "display: none;";
    }
  }
  function clearError(){
        errorMessage.style = "display: none;";
        userInput.style = "border: none;";
      }
  userInput.onchange = () => validateEmail(userInput.value);
  loginButton.onblur = () => validateEmail(userInput.value);
  userInput.onfocus = () => clearError(userInput.value);

  var psswdInput = document.getElementById("passworD");
  var errorM = document.getElementById("errorpsswd");

  function validatePassword(value) {
      if(psswdInput.value.length < 8 && value !== "") {
          psswdInput.style = "border: 1px solid red;";
          errorM.style = "display: flex; color: red;";
      }else{
        psswdInput.style = "border: 1px solid green";
        errorM.style = "display: none;";
      }
  }
  function clearErrorM(){
    errorM.style = "display: none;";
    psswdInput.style = "border: none;";
  }

psswdInput.onchange = () => validatePassword(psswdInput.value);
loginButton.onblur = () => validatePassword(psswdInput.value);
psswdInput.onfocus = () => clearErrorM(psswdInput.value);

}
