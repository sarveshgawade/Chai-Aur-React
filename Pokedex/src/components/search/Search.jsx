import React from 'react'

function Search() {
  return (
    <div className=''>
        <input 
            className='mt-1 p-2 border border-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300" w-96'
            type="text"
            placeholder='pokemon name ....'
        />
    </div>
  )
}

export default Search
