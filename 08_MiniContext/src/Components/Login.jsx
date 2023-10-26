import React, { useState,useContext } from "react"
import UserContext from "../Context/UserContext"

function Login(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    // userContext
    const {setUser} = useContext(UserContext)

    // sending data
    const HandleSubmit= (e) => {
        e.preventDefault()
        setUser({username,password})
    }

    return(
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
            />
            {" "}
            <input 
                type="password" 
                placeholder="password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={HandleSubmit}>Submit</button>
        </div>
    )
}

export default Login