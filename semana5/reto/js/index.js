const gatos = [
    {     
      imagen:
        "https://www.feelcats.com/wp-content/uploads/2019/06/razas-gatos-inteligente-maine-coon.jpg",
      nombre: "Maine Coon",
      caracteristica: "Son característicos por ser unos de los que tienen un mayor peso, razón por la cual hay quienes los emparentan con los Angoras Turcos.",      
    },
    {     
        imagen:
          "https://www.feelcats.com/wp-content/uploads/2018/10/gato-gris-persa.jpg",
        nombre: "Gato Persa",
        caracteristica: "La anchura de su cara y la variedad de colores de su pelaje lo convierten en uno de los gatos más aristocráticos y cuyo pedigrí es más considerado.",      
      },
      {     
        imagen:
          "https://www.feelcats.com/wp-content/uploads/2018/04/bengali-gato.jpg",
        nombre: "Bengalí",
        caracteristica: "Su exotismo le hace asemejarse a los Ocelotes o leopardos. Es un gato de un pelo fino, suave y con un patrón muy particular en forma de rosetas.",      
      },
      {     
        imagen:
          "https://www.feelcats.com/wp-content/uploads/2018/02/angora-turco-gato.jpg",
        nombre: "Angora",
        caracteristica: "Provienen de Turquía y su origen es antiquísimo. Su pelo es suave, blanco y largo. Son elegantes y de mirada de color miel. Emergen de su mundo interior, para mostrarse cercanos y muy mimosos.",      
      },
      {     
        imagen:
          "https://www.feelcats.com/wp-content/uploads/2018/06/azul-ruzo-gato.jpg",
        nombre: "Gato Azul ruso",
        caracteristica: "Un animal muy inteligente y que se caracteriza por su pelo corto y plateado, el cual le da una imagen aterciopelada. Se trata de un animal con una complexión esbelta y alargada, lo cual le permite ser ágil y atlético. La mirada del Azul Ruso no te dejara indiferente.",      
      },
    ];

  const container = document.querySelector(".container");

// quiero agregar elemenos al container
gatos.map((gato) => {
    // ahora en esta seccion vamos a crear los card
    // Esto es JS se llama template string => ``
    // Sirve para poder tener texto y variable juntos
    // return `La laptop se llama ${laptop.nombre} y el precio es ${laptop.precioOferta}`;
    container.innerHTML += `
    <div class="card">
    <h4 class="title">${gato.nombre}</h4>
    <img
      src=${gato.imagen}
      alt=""
      width="300"
    />
    <div class="container-caracteristica">
        <p class="caracteristica">${gato.caracteristica}</p>
    </div>
  </div>
     `;
  });