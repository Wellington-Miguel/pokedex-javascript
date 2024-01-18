const pokeApi = {
    getPokemons: function (offiset= 0,  limit=10){
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offiset}`
        return fetch(url)
        .then((response)=>response.json())
        .then((jsonResponse)=>jsonResponse.results)
       
    }
}



