window.onload = function () {
    var nameInput = document.getElementById("first-name");
    var createButton = document.getElementById("signUp");
    var errorMessage = document.getElementById("errorName");
  
    function validateName(value) {
      if (nameInput.length < 3 && value !== "") {
        nameInput.style = "border: 1px solid red;";
        errorMessage.style = "display: flex; color: red;";
      } else {
        nameInput.style = "border: 1px solid green;";
        errorMessage.style = "display: none;";
      }
    }
    function clearError(){
          errorMessage.style = "display: none;";
          nameInput.style = "border: none;";
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