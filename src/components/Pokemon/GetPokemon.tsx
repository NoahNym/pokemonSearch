import React from 'react'

export type Pokemon = {
    id: string,
    name: string,
    base_experience: string,
    sprites: {
        front_default: string
    }
}

export default function GetPokemon({ data }: { data: Pokemon }) {
    if (!data.name) {
        return (
            <div>
            
            </div>
        )
    }
    return (
        <div>
            <div className='bg-white p-2 rounded-md'>
                <h2>Name: {data.name}</h2>
                <h2>Experience: {data.base_experience} </h2>
                <h2>Id: {data.id}</h2>

                <img className=' w-80 p-2 m-2' src={`https://img.pokemondb.net/artwork/large/${data.name}.jpg`} />
            </div>
        </div>
    )
}
