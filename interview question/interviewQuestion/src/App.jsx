

import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(5)

  function add(){
    // even though on single plus click 3 times below lines will be executed , but only one time update will be performed since React uses optimizatino algo which process below lines in a batch only once
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  function subtract(){
    // if we want to perform single update at a time then code is written as follows
    // setCounter method also gives a call back which gives previous value of the state through which we can perform single update at a time
    setCounter((prevValue) => prevValue - 1)
    setCounter((prevValue) => prevValue - 1)
    setCounter((prevValue) => prevValue - 1)
  }

  return (
   <>
    <h1>Counter: {counter}</h1>
    <button onClick={add}>Plus</button>
    <button onClick={subtract}>Minus</button>
   </>
  )
}

export default App
