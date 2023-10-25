import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github(){

    // METHOD-2
    const data = useLoaderData()

    
    // METHOD-1
    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((data)=> setData(data))
    // },[])

    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github Followers: {data.followers}

            <img src={data.avatar_url} alt="Git profile photo" width={300}  />    
        </div>
    )
}

export default Github

export const gitHubInfoLoader = async ()=> {
    const response =  await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}