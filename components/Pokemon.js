import React from 'react'
import useFetchPokemon from './useRequest'

export default function Pokemon({pokemon}){
    const {name} = pokemon
    const {result, error} = useFetchPokemon(name)

    if (error) return <h1>Something Went Wrong!</h1>
    if (!result) return <h1>Loading...</h1>

    return(
        <div className='Card'>
            <span className='Card__id'>#{result.id}</span>
            <img
            className='Card__image'
            src={result.sprites.front_default}
            alt={name}
            />
            <h1 className='Card__name'>{name}</h1>
            <span className='Card__details'>
                {result.types.map((poke) => poke.type.name).join(', ')}
                <br/>
            </span>
        </div>
    )
}