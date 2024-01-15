let offiset = 0;
let limit = 10;
let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offiset}`
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
 fetch(url)
 .then((response)=>response.json())
 .then((jsonResponse)=>jsonResponse.results)
.then((pokemons)=>{
    for(i= 0; i<=pokemons.length; i++){
        const pokemon = pokemons[i]
        const pokemonLi = document.getElementById(`pokemonOl`)
        pokemonLi.innerHTML += addPokemonLi(pokemon)
    }
})