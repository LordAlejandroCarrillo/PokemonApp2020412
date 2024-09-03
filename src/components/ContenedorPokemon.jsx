import { useState } from "react"

export const ContenedorPokemon = ({pokemonData, nombrePo})=>{
    
    return(
    <>
        <div className="m-5">
            <table className="table table-sm table table-striped">
                <thead>
                    <tr>
                        <td colSpan="2" className="fs-1 fw-bolder text-center">{pokemonData.nombre}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><img className=" rounded mx-auto d-block w-25" src={pokemonData.url} alt="" /></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="fs-3">{`Altura: ${pokemonData.altura/10}m`}</td>
                        <td className="fs-3">{`Peso: ${pokemonData.peso/10}kg`}</td>
                    </tr>
                    {
                    pokemonData.length !== 0 && 
                        pokemonData.tipos.map(({type})=> (
                            <tr>
                                <td colSpan="" className="fs-3">{`Tipo:`}</td>
                                <td colSpan="" className="fs-3">{type.name}</td>
                            </tr>
                        ))
                    }
                    {
                    pokemonData.length !== 0 && 
                        pokemonData.estadisticas.map(({stat, base_stat})=> (
                            <tr>
                                <td colSpan="" className="fs-3">{`${stat.name}    :`}</td>
                                <td colSpan="" className="fs-3">{base_stat}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}

