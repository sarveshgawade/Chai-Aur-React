import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Profile (){

    // getting data
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login !</div> 

    return(
        <h1>Welcome, {user.username}</h1>
    )
}

export default Profile