function validateLetters(param){
  var noNumbers = false;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(element)){
      noNumbers = true;
    }
  }
  return noNumbers;
}
function validateNumbers(param){
  var noLetters = false;
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (!isNaN(element)){
      noLetters = true;
    }
  }
  return noLetters;
}
function validateName(param){
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
  }
  if (validateNumbers(param) == true){
    return false;
  }else{
    return true;
  }
}
function validateDocument(param){
  var numbers = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (!isNaN(param)){
      numbers++;
    }
  }
  if (isNaN(param) || numbers < 7){
    return false;
  }else{
    return true;
  }
}
// function validateDate(param){
//   var day = new Date();
//   var paramDate = new Date(param);
//   if (paramDate > day){
//     return false;
//   }
// }
function validateDate(inputD) {
  var today = new Date();
  var inputDate = new Date(inputD);
  if (inputDate > today) {
    return false;
  }
}
function validatePhone(param){
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
  }
  if (validateLetters(param) == true || param.length < 10){
    return false;
  }else{
    return true;
  }
}
function validateAddress(param){
  var numbers = "";
  var letters = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(param)){
      letters++;
    }else if (!isNaN(param)){
      numbers++
    }
  }
  if (numbers <= -1 || letters <= -1 || letters + numbers < 5 || param.indexOf(" ") <= 0 ){
    return false;
  }else{
    return true;
  }
}
function validateCity(param){
  var numbers = "";
  var letters = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (isNaN(param)){
      letters++;
    }else if (!isNaN(param)){
      numbers++
    }
  }
  if (letters < 3){
    return false;
  }else{
    return true;
  }
}
function validatePostalCode(param){
  var numbers = "";
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (!isNaN(param)){
      numbers++;
    }
  }
  if (isNaN(param) || numbers < 4 || numbers > 5){
    return false;
  }else{
    return true;
  }
}
function emailValidation(input){
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return validateEmail.test(input);
}
function validatePassword(param){
  var arrayLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var letters = 0;
  var numbers = 0;
  for (let i = 0; i < param.length; i++) {
    if (arrayLetters.includes(param[i].toLocaleLowerCase())){
      letters++;
    }else{
      Number.isInteger(param)
      numbers++;
    }
  }
  if (param.length < 7 || letters <= 0 || numbers <= 0) {
    return false
  }else{
    return true
  }
}
var nameError = "";
var surnameError = "";
var documentError = "";
var dateError = "";
var numberError = "";
var addressError = "";
var cityError = "";
var postalError = "";
var mailError = "";
var passwordError = "";
var rptPasswordError = "";

window.onload = function () {
  var nameInput = document.getElementById("firstName");
  var errorName = document.getElementById("errornAme");
  function nameEvent() {
    if (validateName(nameInput.value) == false) {
      errorName.style.visibility="visible";
      nameError = errorName.textContent;
    } else {
      nameError = nameInput.value;
    }
  }
  nameInput.addEventListener("focus", function() {
    errorName.style.visibility="hidden";
  })
  nameInput.addEventListener("blur", nameEvent);

  var surnameInput = document.getElementById("lastName");
  var errorSurname = document.getElementById("laName");
  function surnameEvent() {
    if (validateName(surnameInput.value) == false) {
      errorSurname.style.visibility="visible";
      surnameError = errorSurname.textContent;
    } else {
      surnameError = surnameInput.value;
    }
  }
  surnameInput.addEventListener("blur", surnameEvent);
  surnameInput.addEventListener("focus", function() {
    errorSurname.style.visibility="hidden";
  })
  var dniInput = document.getElementById("dni");
  var errorDni = document.getElementById("dniError");
  function documentEvent() {
    if (validateDocument(dniInput.value) == false) {
      errorDni.style.visibility="visible";
      documentError = errorDoc.textContent;
    } else {
      documentError = dniInput.value;
    }
  }
  dniInput.addEventListener("blur", documentEvent);
  dniInput.addEventListener("focus", function() {
    errorDni.style.visibility="hidden";
  })
  var dateInput = document.getElementById("birthDate");
  var errorDate = document.getElementById("bdError");
  function dateEvent() {
    if (validateDate(dateInput.value) == false) {
      errorDate.style.visibility="visible";
      dateError = errorDate.textContent;
    } else {
      dateError = dateInput.value;
      var year = dateError.substring(0,4);
      var month = dateError.substring(5,7);
      var day = dateError.substring(8,10);
      dateError = month + '/' + day + '/' + year;
    }
  }
  dateInput.addEventListener("blur", dateEvent);
  dateInput.addEventListener("focus", function() {
    errorDate.style.visibility="hidden";
  })
  var phoneInput = document.getElementById("phoneNumb");
  var errorPhone = document.getElementById("invalidPhone");
  function phoneEvent() {
    if (validatePhone(phoneInput.value) == false) {
      errorPhone.style.visibility="visible";
      numberError = errorPhone.textContent;
    } else {
      numberError = phoneInput.value;
    }
  }
  phoneInput.addEventListener("blur", phoneEvent);
  phoneInput.addEventListener("focus", function(){
    errorPhone.style.visibility="hidden";
  })
  var addressInput = document.getElementById("adrress");
  var errorAddress = document.getElementById("addressError");
  function addressEvent() {
    if (validateAddress(addressInput.value) == false) {
      errorAddress.style.visibility="visible";
      addressError = errorAddress.textContent;
    } else {
      addressError = addressInput.value;
    }
  }
  addressInput.addEventListener("blur", addressEvent);
  addressInput.addEventListener("focus", function(){
    errorAddress.style.visibility="hidden";
  })
  var cityInput = document.getElementById("location");
  var errorCity = document.getElementById("invalidLocation");
  function cityEvent() {
    if (validateCity(cityInput.value) == false) {
      errorCity.style.visibility="visible";
      cityError = errorCity.textContent;
    } else {
      cityError = cityInput.value;
    }
  }
  cityInput.addEventListener("blur", cityEvent);
  cityInput.addEventListener("focus", function(){
    errorCity.style.visibility="hidden";
  })
  var postalCodeInput = document.getElementById("psCode");
  var errorPostal = document.getElementById("invalidPsC");
  function postalCodeEvent(){
    if (validatePostalCode(postalCodeInput.value) == false) {
      errorPostal.style.visibility="visible";
      postalError = errorPostal.textContent;
    } else {
      postalError = postalCodeInput.value;
    }
  }
  postalCodeInput.addEventListener("blur", postalCodeEvent);
  postalCodeInput.addEventListener("focus", function(){
    errorPostal.style.visibility="hidden";
  })
  var emailInput = document.getElementById("Email");
  var errorEmail = document.getElementById("invalidEmail");
  function emailEvent() {
    if (emailValidation(emailInput.value) == false) {
      errorEmail.style.visibility="visible";
      mailError = errorEmail.textContent;
    } else {
      mailError = emailInput.value;
    }
  }
  emailInput.addEventListener("blur", emailEvent);
  emailInput.addEventListener("focus", function(){
    errorEmail.style.visibility="hidden";
  })
  var passwordInput = document.getElementById("password");
  var errorPassword = document.getElementById("invalidPassword");
  function passwordEvent() {
    if (validatePassword(passwordInput.value) == false) {
      errorPassword.style.visibility="visible";
      passwordError = errorPassword.textContent;
    } else {
      passwordError = passwordInput.value;
    }
  }
  passwordInput.addEventListener("blur", passwordEvent);
  passwordInput.addEventListener("focus", function(){{
      errorPassword.style.visibility="hidden";
    }
  })
  var repeatPasswordInput = document.getElementById("pswdconfirm");
  var errorRepeatPassword = document.getElementById("invalidpsswconf");
  function rptPasswordEvent() {
    if (validatePassword(repeatPasswordInput.value) == false) {
      errorRepeatPassword.style.visibility="visible";
      rptPasswordError = errorRepeatPassword.textContent;
    } else {
      rptPasswordError = repeatPasswordInput.value;
    }
  }
  repeatPasswordInput.addEventListener("blur", rptPasswordEvent);
  repeatPasswordInput.addEventListener("focus", function(){
      errorRepeatPassword.style.visibility="hidden";
  })
    function allValidationsOk() {
    if (validateName(nameInput.value) && validateDocument(documentInput.value) && 
      validatePhone(phoneInput.value) && 
      validateAddress(addressInput.value) && validateCity(cityInput.value) && 
      validatePostalCode(postalCodeInput.value) && emailValidation(emailInput.value) && 
      validatePassword(passwordInput.value) && !dateEvent()){
      return true;
    } else {
      alert("Something went wrong, check your info")
    }
  }
    function storageInLocal(){
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("surname", surnameInput.value);
    localStorage.setItem("document", documentInput.value);
    localStorage.setItem("dob", dateInput.value);
    localStorage.setItem("phone", phoneInput.value);
    localStorage.setItem("address", addressInput.value);
    localStorage.setItem("city", cityInput.value);
    localStorage.setItem("zip", postalCodeInput.value);
    localStorage.setItem("email", emailInput.value);
    localStorage.setItem("password", passwordInput.value);
    localStorage.setItem("rptPassword", repeatPasswordInput.value);
  }

  var signupURL = "https://basp-m2022-api-rest-server.herokuapp.com/signup"

    function confirmFetch() {
    if (allValidationsOk()) {
      fetch(signupURL + "?name=" + nameError + "&lastName=" + surnameError + "&dni=" + 
      documentError + "&dob=" + dateError + "&phone=" + numberError + "&address=" + 
      addressError + "&city=" + cityError + "&zip=" + postalError + "&email=" + 
      mailError + "&password=" + passwordError + "&repeatPassword=" + rptPasswordError)
      .then(function (response) {
        alert ("Success!")
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        alert ("Name: " + nameError + "\nSurname: " + surnameError + "\nDocument: " + 
        documentError + "\nDate of Birth: " + dateError + "\nPhone number: " + 
        numberError + "\nAddress: " + addressError + "\nLocation: " + cityError + 
        "\nPostal code: " + postalError + "\nE-mail: " + mailError + "\nPassword: " + 
        passwordError + "\nRepeat password: " + rptPasswordError);
      })
      .catch(function(error) {
        alert("Sign-up failed", error)
      })
    }
  }

    function showConfirm(event) {
    event.preventDefault();
    confirmFetch();
    storageInLocal();
  }

  var buttonConfirm = document.querySelector('input[type="submit"]');
  buttonConfirm.addEventListener('click', showConfirm)

  function refreshDataFromLocal(){
  if (localStorage.name && localStorage.surname && localStorage.document && 
    localStorage.address && localStorage.dob && localStorage.city && localStorage.zip &&
    localStorage.phone && localStorage.email && localStorage.password && 
    localStorage.rptPassword){
      nameInput.value = localStorage.name;
      surnameInput.value = localStorage.surname;
      documentInput.value = localStorage.document;
      dateInput.value = localStorage.dob;
      phoneInput.value = localStorage.phone;
      addressInput.value = localStorage.address;
      cityInput.value = localStorage.city;
      postalCodeInput.value = localStorage.zip;
      emailInput.value = localStorage.email;
      passwordInput.value = localStorage.password;
      repeatPasswordInput.value = localStorage.rptPassword;
    }
  }
  refreshDataFromLocal();
}
  