// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function addition(num1, num2){
  return num1 + num2
}
var result = addition(4,6);
console.log('This is 6a result:' + result);

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function addition2(num1, num2){
    
if(typeof num1 === 'number' && typeof num2 === 'number'){
  return num1 + num2
  }else{
    alert('One of the params. is not a number')
    return NaN
  }
}
var result2 = addition2('abc',6);
 console.log('This is 6b result:' + result2);


// Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(numb){
  return Number.isInteger(numb);
}
console.log('This is 6c integer number:' + validateInteger(5));
console.log('This is 6c not integer numbre:' + validateInteger(3.6));

// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function addition2(num1, num2){
    
if(typeof num1 === 'number' && typeof num2 === 'number'){
  if(validateInteger(num1) && validateInteger(num2)){
    return num1 + num2 
  }else{
    alert('One of the number is not an integer.')
    if(!validateInteger(num1)){
      return Math.round(num1);
    }else{
      return Math.round(num2);
    }
  }
  }else{
    alert('One of the params. is not a number')
    return NaN
  }
}
var result2 = addition2(3,6.7);
console.log('This is 6d result:' + result2);

// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga 
// funcionando igual.

function newValidation(num1, num2){
if(!validateInteger(num1)){
    return Math.round(num1);
  }else{
    return Math.round(num2);
  }
}

function addition2(num1, num2){
    
if(typeof num1 === 'number' && typeof num2 === 'number'){
  if(validateInteger(num1) && validateInteger(num2)){
    return num1 + num2 
  }else{
    alert('One of the number is not an integer.')
    return newValidation(num1,num2);
  }
  }else{
    alert('One of the params. is not a number')
    return NaN
  }
}
var result3 = addition2(3,6.7);
console.log('This is 6e result:' + result3);