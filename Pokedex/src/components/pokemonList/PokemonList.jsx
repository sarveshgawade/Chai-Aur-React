import React, { useDebugValue, useEffect, useState } from 'react'
import axios from 'axios'
import Pokemon from '../pokemon/Pokemon'

function PokemonList() {

    const [pokemonList,setPokemonList] = useState([])
    const [isLoading,setisLoading] = useState(true)

    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon'

    async function downloadPokemons(){
        const response = await axios.get(POKEDEX_URL)
        const pokemonResultArray = response.data.results
        const pokemonResultPromise = pokemonResultArray.map((item)=> axios.get(item.url))
        const pokemonData = await axios.all(pokemonResultPromise)
        const eachPokemonArray = pokemonData.map((item)=>{
            const pokemon = item.data 
      
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        })

        // console.log(eachPokemonArray);
        setPokemonList(eachPokemonArray)
        setisLoading(false)
    }

    useEffect(()=>{
        downloadPokemons()
    },[])

  return (
    <div>
        <div>List of Pokemons</div>
        {
            isLoading ? 
                'loading data': 
                pokemonList.map((p)=> <Pokemon name={p.name} key={p.id} image={p.image}/>)

        }
    </div>
  )
}

export default PokemonList
