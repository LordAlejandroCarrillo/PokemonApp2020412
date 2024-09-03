import { useState } from 'react'
import { reqPokemon} from '../services/pokemon'

export const usePokemon = () =>{
    const [pokemonData, setPokemon] = useState([])
    const [nombrePo, setNombre] = useState('')

    const handleGetPokemon = (e, nombre)=>{
        e.preventDefault()
        reqPokemon(nombre).then((pokemonData)=>{
            setPokemon(pokemonData)
        })

        setNombre(nombre)
    }
    return{
        handleGetPokemon,
        pokemonData,
        nombrePo
    }
}