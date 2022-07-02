const fecha = new Date();
console.log(fecha);
const year = fecha.getFullYear();
console.log(year)  
const hora = fecha.getHours();
console.log("hora", hora);

const minutos = fecha.getMinutes();
console.log("minutos", minutos);

const segundos = fecha.getSeconds();
console.log("segundos", segundos);

const milisegundos = fecha.getMilliseconds();
console.log("milisegundos", milisegundos);

// UTC => Es la hora global
const diaGlobal = fecha.getUTCDate();
console.log("dia globlal", diaGlobal);

// En teoria fecha es string
// existe una funcion llama typeof la cual me permite saber
// que tipo de datos es un variable
console.log("Type", typeof fecha);
const fechaString = String(fecha);
console.log("Type", typeof fechaString);
console.log("Fecha", fechaString);

// Existe una funcion la cual me permite transformar un text string
// a un array
// Ejmplo
const frase = "Hola me llamo Juan"; // ['Hola', 'me', 'llamo', 'Juan']
const frase2 = "Como estas:bien supongo";
const frase3 = "Mi numero es >= 99999";
// Este string vamos a transformarlo a array
// En este caso quiero separar por " "
// Ustedes pueden poner cualquier caracter
console.log(frase.split(" "));
console.log(frase2.split(":"));
console.log(frase3.split("9"));

console.log("Fecha en string", fechaString.split(" ")[5]);
// para el pais
console.log("Pais", fechaString.split(" ")[6]);
// Reto quitar el (Peru
// Sepan que existe una funcion llamada replace la
// cual permite reemplazar un texto por un texto nuevo
const pais = fechaString.split(" ")[6]; // (Peru
// Replace recibe 2 parametros
// 1 el texto que queremos reemplazar
// 2 el text nuevo
// En este caso
// 1 => ( 
// 2 => "" // nada
// En español buscar el ( y reemplazalo por ""
console.log(pais.replace("(", ""));
//! Nota "" => Cuando vean 2 comillas sin espacio eso
//! es igual a vacio 