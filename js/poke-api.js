
const pokeApi = {
    convertPokemon: function (pokemonDetails) {
        const pokemon = new Pokemon()
        pokemon.name = pokemonDetails.name
        pokemon.number = pokemonDetails.id
        const types = pokemonDetails.types.map((typeSlot)=> typeSlot.type.name)
        const [type] = types
        pokemon.type = type
        pokemon.types = types
        pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default
        return pokemon;
    },
    getPokemonDetails: function (pokemon) {
        return fetch(pokemon.url)
                .then((response) => response.json())
                .then(pokeApi.convertPokemon);
    },
    getPokemons: function (offset = 0, limit = 10) {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        return fetch(url)
            .then((response) => response.json())
            .then((jsonResponse) => jsonResponse.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
            .then((detailsRequest) => Promise.all(detailsRequest))
            .then((PokemonDetails) => {
                return PokemonDetails;
            });
    }
}
