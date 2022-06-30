function nombreDeLaFuncion(){
    const alumnos=["Pepe", "Juan", "Maria", "Luisa", "Lex", "Lucas", "klark"];
    for(let alumno of alumnos){
        console.log(alumno);
    }
}
/* nombreDeLaFuncion();
console.log("Yesica");
console.log("Yesica");
console.log("Yesica");
console.log("Yesica");
nombreDeLaFuncion(); */
function cubodDeUnNumero(){
    // return Math.pow(10,3);
    return 2+3;
}
/* const resultado= cubodDeUnNumero();
console.log(resultado) */
function potenciaDeUnNumero(numero,potencia){
    return Math.pow(numero,potencia);
}

/* const ejemplo1=potenciaDeUnNumero(4,3);
const ejemplo2=potenciaDeUnNumero(6,2);
console.log(ejemplo1);
console.log(ejemplo2); */

//Implementar un algoritmo que reciba 2 argumentos y los sume
//el resultado se deberà imprimir en pantalla


function suma(numero1,numero2){
    const n1=Number(numero1);
    const n2=Number(numero2);
    if(isNaN(n1) || isNaN(n2)){
        return "No se puede sumar";
    }
    return n1+n2;
}
/* let resultado=suma("12",12);
console.log(resultado);
document.write(resultado) */

// Paso 1 creo una funcion que me retorne el factorial
function calcularFactorial(numero) {
    // 4 = 1 x 2 x 3 x 4 = 24
    const number = Number(numero);
  
    //! Nota el return aparte de retornar un valor da fin a la
    //! ejecucion de la funcion
    if (isNaN(number)) {
      return "Esto no se puede hacer porque no es un numero";
    }
  
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }

//document.write(calcularFactorial(4))

function imprimirFactorial(){
    const inputValor=document.getElementById("input_number").value;
    // console.log(inputValor)
    const resultado=calcularFactorial(inputValor);
    const container=document.querySelector(".container");
    container.innerHTML+="<p>"+inputValor+"!= "+resultado+"</p>";
}

/* Crear una vista la cual tenga un input y boton
esta debera pintar la tabla de multiplicar
Ejemplo 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
...
5 x 10 = 50 */

function GenerarTabla(){
    let numero=Number(document.getElementById("inputNumero").value);
    let contenedor=document.getElementById("contenedor");
    if(isNaN(numero)){
        contenedor.innerHTML+="<p>No es un numero</p>";
        return
    }
    for(let i=1;i<=10;i++){
       contenedor.innerHTML+="<p>"+numero+" x "+i+" = "+numero*i+"</p>";
    }
}