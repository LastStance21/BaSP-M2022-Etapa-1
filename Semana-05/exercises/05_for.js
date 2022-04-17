// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var vehicles = ['car', 'boat', 'plane', 'bycicle', 'trycicle']
i = 0
for(i in vehicles){
  console.log(alert(vehicles[i]));
}
// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var vehicles = ['car', 'boat', 'plane', 'bycicle', 'trycicle']
for (var i = 0; i < vehicles.length; i++) {
        vehicles[i] = vehicles[i].charAt(0).toUpperCase() + vehicles[i].slice(1);
    console.log(alert(vehicles[i]));
  }

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto 
// a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence.
// Al final mostrar una única alerta con la cadena completa.

var sentence = '';
i = 0
for(i in vehicles){
  sentence=sentence +  " " + vehicles[i];
}
alert(sentence);

// Crear una array vacío y con un bucle for de 10 repeticiones.
//  Llenar el array con el número de la repetición, es decir que al final de la ejecución del 
//  bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9.
//   Mostrar por la consola del navegador el array final (utilizar console.log).

var emptarray = [];
for (var i = 0; i < 10; i++) {
    emptarray.push(i);
}
console.log(emptarray);