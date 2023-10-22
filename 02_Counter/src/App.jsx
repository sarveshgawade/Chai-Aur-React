import { useState } from 'react'
import './App.css'

function App() {

  let [count,setCount] = useState(7)

  const increment = () =>{
    setCount(count+1)
  }
  const decrement = () =>{
    setCount(count-1)
  }
  return (
    <>
      <h1>Simple Counter Project</h1>
      <br />
      <h2>Count: {count}</h2> <br />
      <button onClick={increment}>Inc</button> <br /><br />
      <button onClick={decrement}>Dec</button>
    </>
  )
}

export default App
