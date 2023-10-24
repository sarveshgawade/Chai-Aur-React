import { useCallback, useEffect, useState, useRef} from 'react'


function App() {
  
  // useState Hooks
  const [length,setLength] = useState(7)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // initializing variable for useRef Hook
  let passwordRef = useRef(null)

  // useCallback Hook
  const generatePassword= useCallback(()=>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*(){}~"

      for(let i=1 ; i<=length ; i++){
          let charIndex = Math.floor(Math.random()*str.length+1)
          pass += str.charAt(charIndex)
      }

      setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])


  // useEffect Hook
  useEffect(()=>{
    generatePassword()
  },[length,numAllowed,charAllowed,generatePassword])


  // function to copy password to clipboard
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current ?.select()
    window.navigator.clipboard.writeText(password)
  },[password]) 

  return (  
    <div  className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-700' >
          <div className='flex flex-col shadow-lg rounded-lg overflow-hidden mb-4 p-3'>
            <h1 className='text-white text-center  mb-2 mt-2'>Password Generator</h1>
            <input ref={passwordRef} type="text"  value={password} className='outline-none w-full py-1 px-3 rounded-lg' placeholder='Password' readOnly/>
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white  px-3 py-0.5 shrink-0 w-20 ml-32 mt-4 rounded-lg'>copy</button>
          </div>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={7} max={27} value={length} className='mr-3 cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label className='mr-3'>Length: {length}</label>
        </div>   
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={()=>setNumAllowed((prev)=> !prev)}/>
            <label className='mr-3'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>setCharAllowed((prev)=> !prev)}/>
            <label >Character</label>
        </div>
        
      </div>


    </div> 
  )
}

export default App
