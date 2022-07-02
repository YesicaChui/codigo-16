const edades = [10,20,30,40];

const analizandoEdades = edades.every(edad=>edad<50)
// console.log(analizandoEdades);

const alumnos=[
    {
        name: "Pepe",
        age: 21,
    },
    {
        name:"Luis",
        age: 18
    },
    {
        name: "Maria",
        age:19
    }
]

console.log("El grupo es mayor de edad",
alumnos.every(alumno => alumno.age>=18))