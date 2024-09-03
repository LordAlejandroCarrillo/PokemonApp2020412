export const reqPokemon = async(nombre)=>{
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`)
            const  data = await resp.json()
            const pokemonData = ({
                url: data.sprites.other.showdown.front_default,
                nombre: data.name,
                peso: data.weight,
                altura: data.height,
                tipos: data.types,
                estadisticas: data.stats
            })

            return(
                pokemonData
            )
    } catch (err) {
        console.error(err)
    }
}