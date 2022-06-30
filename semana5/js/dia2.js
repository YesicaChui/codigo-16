
const productos=[
    {
        name:"Laptop HP",
        price: 1300,
        brand: "HP"
    },
    {
        name:"Laptop Gamer",
        price: 1800,
        brand: "Gamer"
    },
    {
        name:"Laptop Acer",
        price: 1900,
        brand: "Acer"
    },
    {
        name:"Laptop Asus",
        price: 1500,
        brand: "Asus"
    },
]

const productsForEach= productos.forEach((product)=>{
    // console.log(product.name)
}); 

const productsIterMap=productos.map((product)=>{
    // console.log(product.name)
    return product.price-100
});
/* console.log(productsForEach);
console.log(productsIterMap); */
/* const edades= [4,8,10,15];

const mapEdades=edades.map((edad)=>Math.pow(edad,2));
console.log(mapEdades); */

//Reto
/* const edades= [4,8,10,15];
const arrayEdades=[];

for(let i=0;i<edades.length;i++){
    arrayEdades[i]=Math.pow(edades[i],2);
}
console.log(arrayEdades) */
const clothes = [
    {
      brand: "Mango",
      type: "Shirt",
      price: 200,
      store: "Falabella",
      rating: 4.3,
      features: {
        color: "green",
        size: "small",
      },
    },
    {
      brand: "Zara",
      type: "Pants",
      price: 300,
      store: "Zara",
      rating: 3.9,
      features: {
        color: "black",
        size: 32,
      },
    },
    {
      brand: "Tommy",
      type: "T-shirt",
      price: 120,
      store: "Tommy",
      rating: 4.3,
      features: {
        color: "blue",
        size: "M",
      },
    },
  ];

  //Filter: Es el hermano de map

const filtro = clothes.filter(clothe => clothe.price>150 && clothe.rating>4 );
console.log(filtro)


// Filter: Es el hermano de map
// porque filter tambien retorna un array de elementos
// sin embargo filter sirve para poder crear filtro en base a un condicion

// queremos solo los productos que tenga como precio > 100
// Si el elemento es > 100 entonces guardalo en la variable filtro

// vamos a buscar en el array de objetos las prendas que contengan la palabra shirt
// En la condicion clothe.type.includes("shirt")
// quiero que en el string clothe.type busques si "shirt" existe
// un truco para evitarnos el tema del las mayusculas o minusculas
// es convertir el texo a mayusulas o minusculas
// T-shirt => t-shirt
// pants => pants
// Shirt => shirt

// includes basicamente sirve para buscar algo en un texto
// ejempo
const frase = "HolameLlamocarlos";
// Basicamente include recibe un paramtro string y lo busca en el texto
// si lo encuentro retorna true si no lo hace retorana false
//HolameLlamocarlos => holamellamocarlos
/* console.log(frase.toLowerCase().includes("llamo"));

const filtroShirt = clothes.filter((clothe) =>
  clothe.type.toLowerCase().includes("shirt")
);
console.log("filtroShirt", filtroShirt); */

/* const numbers = [10,20,30,40,50,60,70];
const numerosMayores = numbers.filter(number=>number>80)
console.log(numerosMayores);
console.log(numerosMayores[0]);
const unElemento = numbers.find(number =>number>80);
console.log(unElemento) */

//Find tiene un hermanito llamado findIndex
//El es lo mismo que find sin embargo retorna el indice

const numbers = [10,20,30,40,50,60,70];

const findIndice=numbers.findIndex(number=>number<15);
console.log(findIndice);
