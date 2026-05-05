const nombre = document.querySelector(".nombre_pokemon");
const altura = document.querySelector(".altura");
const peso = document.querySelector(".peso");
const img = document.querySelector(".sprite");
const abilities = document.querySelector(".abilities");

const form = document.querySelector("form");

const input = document.getElementById("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cargarPokemon(input.value);
});

function cargarPokemon(pokemon) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
    .then((res) => {
      // if(res.ok === false)
      if (!res.ok) throw new Error("Error al llamar a la API");
      return res.json();
    })
    .then((data) => {
      console.log(JSON.stringify(data, null, 4));
      nombre.textContent = data.name;
      altura.textContent = data.height;
      peso.textContent = data.weight;

      img.src = data.sprites.front_default;

      data.abilities.map((item) => {
        const li = document.createElement("li");
        li.textContent = item.ability.name;

        abilities.appendChild(li);
      });
    })
    //   .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
