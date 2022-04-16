/***
 *2a- Crear una variable de tipo string con al menos 10 caracteres y convertir 
 * todo el texto en mayúscula (utilizar toUpperCase).
 */
 var strex1 = 'strawberry';
 

 console.log('2a ex. result:' + strex1.toUpperCase(strex1));

 /***
  *2b- Crear una variable de tipo string con al menos 10 caracteres y generar 
  * un nuevo string con los primeros 5 caracteres guardando el 
  * resultado en una nueva variable (utilizar substring).
  */

  var strex2 = 'friendship';
  
  var strresult2 = strex2.substring(0,5);

  console.log('2b ex. result:' + strresult2);

  /***
   *2c- Crear una variable de tipo string con al menos 10 caracteres y generar 
   * un nuevo string con los últimos 3 caracteres guardando el resultado 
   * en una nueva variable (utilizar substring).
   */
  var strex3 = 'everything';

  var strresult3 = strex3.substring(7,10);

  console.log('2c ex. result:' + strresult3);

  /***
   *2d- Crear una variable de tipo string con al menos 10 caracteres y generar 
   * un nuevo string con la primera letra en mayúscula y las demás en 
   * minúscula. Guardar el resultado en una nueva variable 
   * (utilizar substring, toUpperCase, toLowerCase y el operador +)
   */
  var strex4 = 'motivation';
  var finalresultstrex4 = strex4.charAt(0).toUpperCase(); 
  var finalresultstrexsecond4 = strex4.substring(1,10).toLocaleLowerCase();

  var finalresultstr2d = (finalresultstrex4 + finalresultstrexsecond4);

  console.log('2d ex. result:' + finalresultstr2d);

  /***
   *2e- Crear una variable de tipo string con al menos 10 caracteres y algún 
   * espacio en blanco. Encontrar la posición del primer espacio 
   * en blanco y guardarla en una variable (utilizar indexOf).
   */
  var strex5 = 'appreciate you';
  var finalresultstrex5= strex5.indexOf(' ');

  console.log('2e ex. result:' + finalresultstrex5);

  /***
   *2f- Crear una variable de tipo string con al menos 2 palabras largas 
   * (10 caracteres y algún espacio entre medio). 
   * Utilizar los métodos de los ejercicios anteriores 
   * para generar un nuevo string que tenga la primera letra de ambas 
   * palabras en mayúscula y las demás letras en minúscula 
   * (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
   */
  var initialString = 'sustainable compressor';

  var upperCasePosition = initialString.indexOf('s');
  var firstUppercase = initialString[upperCasePosition].toUpperCase() + initialString.substring(1 , 11); // Sustainable
  
  var upperCasePosition2 = initialString.indexOf('c');
  var secondUppercase = initialString[upperCasePosition2].toUpperCase() + initialString.substring(13 , initialString.length); // Compressor
  
  
  var result = firstUppercase + " " + secondUppercase;
  console.log('2d result:' + result)