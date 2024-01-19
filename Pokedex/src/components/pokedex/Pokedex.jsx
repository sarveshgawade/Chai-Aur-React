import React from 'react'
import Search from '../search/Search'
import PokemonList from '../pokemonList/PokemonList'
// import './Pokedex.css'

function Pokedex() {
  return (
    <div className='flex items-center flex-col mt-10 gap-10 '>
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex

// className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         placeholder="Enter text"


