function capitalizeFirstLetter(pokemonName) {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
}


function addPokemonLi (pokemon){
    return `<li class="pokemon">
    <span id="number">#${pokemon.number}</span> <br>
    <span>${capitalizeFirstLetter(pokemon.name)}</span>
    <div>
        ${pokemon.types.map((type)=> `<p>Tipo: ${capitalizeFirstLetter(type)}</p>`).join('')}
        <img id="pokemon-img" 
         src="${pokemon.photo}"
         alt="${pokemon.name}">
    </div>
</li>`
}

const pokemonLi = document.getElementById(`pokemonOl`)
pokeApi.getPokemons().then((pokemons = [])=>{
     pokemonLi.innerHTML += pokemons.map(addPokemonLi).join('')
    })