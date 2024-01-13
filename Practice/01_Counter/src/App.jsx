
import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  let addValue = () =>{
    if(counter < 7)  setCounter(counter+1)
    
    console.log(`Counter: ${counter}`);
  }

  let subtractValue = () =>{
    if(counter > 0 )  setCounter(counter-1)
    console.log(`Counter: ${counter}`);
  }

  return (
    <>
      <h1>Counter</h1>

      <h2>{counter > 0 && counter < 7 ? counter: "error"}</h2>
      <button onClick={addValue}>Increment: {counter}</button>
      <br />
      <br />
      <button onClick={subtractValue}>Decrement: {counter}</button>
    </>
  )
}

export default App
