import { useEffect, useState } from "react"

// hook for method-2 (optimzed)
import { useLoaderData } from "react-router-dom" 

function Github(){

    // method-2 (optimzed)
    const data = useLoaderData()

    // method-1 
    // let [data,setData] = useState({})

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(d => setData(d))
    // },[])

    return(
        <div className="bg-gray-700 text-white text-4xl p-4">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300}/>
        </div>
    )
}

export default Github

// method-2 (optimzed)
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}