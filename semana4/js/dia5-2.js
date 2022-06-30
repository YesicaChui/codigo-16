function restar(numero1=10,numero2=2){
    return numero1-numero2;
}
// console.log(restar(9,6));
//funcion anonima
/* const multiplicar = function(n1,n2){
    return n1*n2;
}
console.log(multiplicar(3,2)); */

/* const dividir=(n1,n2)=>{
    return n1/n2;
}; */

function ValidarSiEsNumero(numero){
    return !isNaN(numero)
}

const alumnos = [];

function imprimirAlumnos(){
    const inputNombre= document.querySelector("#input_name");
    const nombre=inputNombre.value;
    alumnos.push(nombre);
    const miresultado=document.querySelector(".resultado");
    miresultado.innerHTML=""
    // for(let i=0;i<alumnos.length;i++){
        for(let alumno of alumnos){
        miresultado.innerHTML+="<p>"+alumno+"</p>";
    }

}

//Registrar el ingreso de notas de 4 examentes y calcular el promedio de estos
//Funcion que reciba 4 parametros y  valide calcule el promedio

let CalculoPromedioNotas = ()=>{
    let Nota1=Number(document.getElementById("input_Nota1").value);
    let Nota2=Number(document.getElementById("input_Nota2").value);
    let Nota3=Number(document.getElementById("input_Nota3").value);
    let Nota4=Number(document.getElementById("input_Nota4").value);
    respuesta=document.getElementById("respuesta");
    respuesta.innerHTML=""
    if(isNaN(Nota1)||isNaN(Nota2)||isNaN(Nota3)||isNaN(Nota4)){
        respuesta.innerHTML="Debe ingresar numeros"; return;
    }
    if(Nota1<0||Nota1>20 ||
        Nota2<0||Nota2>20 ||
        Nota3<0||Nota3>20 ||
        Nota4<0||Nota4>20)
        {
            respuesta.innerHTML="Debe ingresar notas validas";return;
        }
    respuesta.innerHTML="<p>El promedio es: "+(Nota1+Nota2+Nota3+Nota4)/4+"</p>";
}