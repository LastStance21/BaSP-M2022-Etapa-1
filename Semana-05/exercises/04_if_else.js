/***
 * Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
 *  si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje 
 * “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
 */

 var random = Math.random();
 if(random >= 0.5){
     console.log(alert('Greater than 0,5.'));
 }else{
     console.log(alert('Lower than 0,5.'));
 }
 console.log(random);

 /***
  * Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/

  var age = Math.floor(Math.random()*100);
//age = 25
  console.log(age);

  if (age > 75){
      console.log('Ancient');
  }else if(age >= 61 & age < 75){
      console.log('Major Adult');
  }else if(age >= 31 & age < 61){
      console.log('Adult');
  }else if(age >= 20 & age < 31){
      console.log('Young');
  }else if(age >= 13 & age < 20){
      console.log('Teenager')
  }else if(age >= 2 & age < 13){
      console.log('Child');
  }else{
        console.log('Baby');
  }