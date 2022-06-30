// container:
const div_container = document.getElementById('container');
// const div_container = document.querySelector('#container');

// Objetos
class Carro {

    constructor(_color, _velocidad) {
        this.color = _color;
        this.velocidad = _velocidad;
    }

    presentacion() {
        const texto = "Hola soy un carro de color " + this.color
        + " y tengo una velocidad de: " + this.velocidad + "kmh";
        return texto;
    }
    setColor(_color){
        if(_color=='NEGRO'){
            return;
        }
        console.log(_color);
        this.color=_color;
    }
}

const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
const carro_azul = new Carro('AZUL', 50); // dar vida al objeto
const carro_verde = new Carro('VERDE', 100); // crear el objeto

carro_rojo.setColor("verde");

div_container.innerHTML += "<p>" + carro_rojo.presentacion()   + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";

/* let miscarros=[]//dentro de un arreglo puedo otro arreglo, y tambien objetos
function crearCarros(x,color){
    for(let i=0;i<x; i++){
        miscarros[i]=new Carro(color,i);
        div_container.innerHTML += "<p>" + miscarros[i].presentacion() + "</p>";
        div_container.innerHTML += "<hr>";
    }
}
crearCarros(10,'verde') */