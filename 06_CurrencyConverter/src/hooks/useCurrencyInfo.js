import {useState,useEffect} from 'react'

// custom Hook
function useCurrencyInfo(currency){

    const [data,setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((resInJson)=> setData(resInJson[currency]) )
        console.log(data);
    },[currency])

    return data
}

export default useCurrencyInfo