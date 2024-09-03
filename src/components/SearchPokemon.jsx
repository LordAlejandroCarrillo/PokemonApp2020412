import { useState } from "react"

export const SearchPokemon = ({handleGetPokemon})=>{

    const[nombre, setNombre] = useState('')
    
    return(
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <form className="d-flex" onSubmit={(e)=>{ handleGetPokemon(e,nombre)}}>
                    <input type="text" className="form-control me-2" onChange={(e)=>{setNombre(e.target.value)}}/>
                    <input value='Buscar' type="submit" className="btn btn-success"/>
                </form>

            </div>
        </>
    )
}