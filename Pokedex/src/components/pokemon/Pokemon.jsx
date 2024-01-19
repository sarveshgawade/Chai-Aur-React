import React from 'react'

function Pokemon({name,image}) {
  return (
    <div className='h-96 w-80 flex flex-col justify-center items-center hover:bg-stone-200 cursor-pointer rounded-2xl hover:translate-y-1 transition-transform'>
        <div className='text-2xl italic mb-4 tracking-[0.5rem]'>{name}</div>
        <div><img src={image} alt="pokemon" className='h-60 max-h-full'/></div>
    </div>
  )
}

export default Pokemon
