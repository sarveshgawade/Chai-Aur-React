import React from 'react'
import Search from '../search/Search'
import PokemonList from '../pokemonList/PokemonList'


function Pokedex() {
  return (
    <div className='flex items-center flex-col mt-10 gap-10 '>
      <Search/>
      <PokemonList/>
    </div>
  )
}

export default Pokedex



