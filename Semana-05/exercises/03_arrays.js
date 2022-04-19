/***
 * Dado el siguiente array: 
 * ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
 * "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 *  mostrar por consola los meses 5 y 11 (utilizar console.log)
 */
var months = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

console.log("3a answer is:" + " " + months[4]);
console.log("3a answer is:" + " " + months[10]);

/***
 * Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
 */
var months2 = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

months2.sort();
console.log('This is 3b result:' + months2);

/***
 * Agregar un elemento al principio y al final del array (utilizar unshift y push)
 */

var months3 = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

var pushvar = months3.push("Hello");
var unshiftvar = months3.unshift("World");

console.log("This is the 3c result:" + months3);

/***
 * Quitar un elemento del principio y del final del array (utilizar shift y pop)
 */

var months4 = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

var finalresult3d = months4.shift() + months4.pop();

console.log("this is 3d result:" + months4);

/***
 * Invertir el orden del array (utilizar reverse)
 */
var months5 = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

var finalresult4f = months5.reverse();

console.log("This is 3e result:" + months5);

/***
 * Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
 */

var months6 = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

console.log("This is 3f result:" + months6.join("-"));

/***
 * Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
 */

var months7 = ["January", "February", "March", "April", "May", "June", "July", "Augost", "September", "October", "November", "December"];

var finalresult7 = months7.slice(start = 4 , end = 11);

console.log("This is the 3g result:" + finalresult7);