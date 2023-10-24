import { useState } from 'react'
import './App.css'
import Button from './Components/Button'

function App() {
  const [color,setColor] = useState("black")

  const handleClick = (c) => {
      setColor(c)
  }

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
                
                <Button bgc="red" txt='Red' onBtnClick={handleClick}/>
                <Button bgc="green" txt='Green' onBtnClick={handleClick}/>
                <Button bgc="blue" txt='Blue' onBtnClick={handleClick}/>
                <Button bgc="grey" txt='Grey' onBtnClick={handleClick}/>
                <Button bgc="brown" txt='Brown' onBtnClick={handleClick}/>
                <Button bgc="yellow" txt='Yellow' onBtnClick={handleClick}/>


            </div>
        
       </div>
        
    </div>
  )
}

export default App
