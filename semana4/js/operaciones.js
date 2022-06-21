let numero1 = 10;
let numero2 = 20;

console.log("Suma", numero1+numero2);

console.log("Resta", numero1-numero2);

console.log("Multiplicar", numero1*numero2);

console.log("Division", numero1/numero2);

let numero3="22";

console.log(Number(numero3));
let numero4="Luis";
console.log(Number(numero4));//nan = not an number

console.log(Number("veintidos"));

console.log(Number("one"));

console.log(Number("12hola"))

console.log(Math.sqrt(4));

console.log(Math.pow(6,3));

/* const catetoA=Number(prompt("ingrese el valor de A"));
const catetoB = Number(prompt("Ingrese el valor de B"));
console.log(catetoA+catetoB);
const operacion2 = Math.sqrt(Math.pow(catetoA,2)+Math.pow(catetoB,2));
console.log("La hipotenusa es", operacion2); */

//Problema 1:

// Hace un algoritmo que halle el area del rectangulo

//A=Base*Altura
/* const Base=Number(prompt("Escribe la base del rectangulo"));
const Altura=Number(prompt("Escriba la altura del rectangulo"));
const Area=Base*Altura;
console.log("El area del rectangulo:", Area); */

// Problema2:
// halla el area del circulo
// A=PI X R al cuadrado
// Math.PI = retorna el valor de PI
const R=Number(prompt("Escriba el radio del circulo"));
const A=Math.PI * Math.pow(R,2);
console.log("El area del circulo es:", A);

