import { usePokemon } from "../hooks/usePokemon"
import { ContenedorPokemon} from "./ContenedorPokemon"
import { SearchPokemon } from "./SearchPokemon"
export const PokemonApp = ()=>{

    const{handleGetPokemon, pokemonData, nombrePo} = usePokemon()

    return(
        <>
            <SearchPokemon handleGetPokemon={handleGetPokemon}/>
            <ContenedorPokemon pokemonData={pokemonData} nombrePo={nombrePo}/>
        </>
    )
}