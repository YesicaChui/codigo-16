const containerMovies = document.querySelector("#container-movies");

function renderCards(movies) {
  containerMovies.innerHTML = "";
  movies.forEach((movie) => {
    
    containerMovies.innerHTML += `
        <div class="col-12 col-sm-4 col-md-3 col-lg-3">
          <div class="card my-3" >
            <img
              src="${movie.images["Poster Art"].url}"
              class="card-img-top"
              alt=""
            />
            <div class="card-body">
              <div class="card-title">${movie.title}</div>
              <p class="card-text">
               ${movie.description}
              </p>
            </div>
          </div>
        </div>
    `;
  });
}

const url =
  "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json";

fetch(url)
  .then((respuestita) => respuestita.json())
  .then((datos) => renderCards(datos.entries));

// console.log(peticion);
// recordemos que fetch retorna una promesa esta tiene 2 escenario
//* resolve (resolver) => Es ocurre cuando la peticion esta ok
//! reject (rechazar) => Es cuando algo fallo

//* then() Es un callback, es una funcion que se ejecuta cuando algo terminar

// Ejemplo con el API de pokemon
const urlPokemon = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

fetch(urlPokemon)
  .then((response) => response.json())
  .then((data) => console.log(data));