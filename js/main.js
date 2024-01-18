
function addPokemonLi (pokemon){
    return `<li class="pokemon">
    <span id="number">#0001</span>
    <span>${pokemon.name}</span>
    <div>
        <p>Tipo:</p>
        <img id="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon">
    </div>
</li>`
}

const pokemonLi = document.getElementById(`pokemonOl`)
pokeApi.getPokemons().then((pokemons = [])=>{
     pokemonLi.innerHTML += pokemons.map(addPokemonLi).join('')
    })