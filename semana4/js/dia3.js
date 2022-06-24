 document.write("<h1>Dia 3 Switch</h1>")
/*const angulo = Number(prompt("Ingrese la operacion 1"));
let mensaje = "";

switch (true) {
    case x > 0 && x < 10:
        alert("x > 0 && x < 10");
        break;
    case x > 0 && x < 20:
        alert("x > 0 && x < 20");
        break;
    case x < 0 || x > 100:
        alert("x < 0 || x > 10");
        break;
    default:
        alert("Ninguno");
} */

let datos =[1,2,3,4,5,6];
let nombres= ["karen","carlos", "ivan"];

// console.log(nombres[1]);
// console.log(nombres.length-2)
// console.log(otroArray);
// document.write("<h1>"+datos[8]+"</h1>");
// document.write("<h1>"+nombres[8]+"</h1>");
console.log(nombres[nombres.length-1]);

// console.log(nombre[])
//push

/*  const datosPrueba=[
1,
true,
false,
-2,
"Hola mundo",
"Agregando un dato",
["Pepe","Juan",[1,2,4,5,[-1,-2,-4]],"Maria"]
];
console.log(datosPrueba.length);
console.log(datosPrueba[3]);
console.log(datosPrueba[6]);
console.log(datosPrueba[6][1]);
console.log(datosPrueba[6][3]);
console.log(datosPrueba[6][2][2])
console.log(datosPrueba[6][2][4][0])



document.write(datosPrueba[3]); */


// const laptops=["hp", "macbook", "asus", "lenovo"];
/* 
laptops.push("Master-G");
console.log("Laptops",laptops); */
/* console.log("Laptops",laptops);
laptops.pop();
laptops.pop();
console.log("Laptops",laptops); */
/* let a=10;
console.log(a); */
/* console.log( laptops.pop());
 console.log("Laptops",laptops); */
/* console.log("Laptops", laptops); */

const alumnos = ["Luis", "Juan", "Maria", "Luciana"];
/* const alumnoEliminado= alumnos.pop();
console.log("El alumno "+ alumnoEliminado + " fue eliminado");
console.log("Alumnos", alumnos); */

/* alumnos.unshift("Daniel");
console.log( alumnos); */
/* alumnos.shift();
alumnos.shift();
console.log( alumnos); */

const colores = ["Rojo", "Verde","Amarillo", "Azul", "Naranja", "Morado"];

console.log(colores.indexOf("Naranja"));//4
console.log(colores.indexOf("Rojo"))//-1

const busqueda=prompt("ingrese el color");

if(colores.indexOf(busqueda)!==-1){
    alert("El color si existe y es "+ colores[colores.indexOf(busqueda)]);
}else
    alert("El color no existe");