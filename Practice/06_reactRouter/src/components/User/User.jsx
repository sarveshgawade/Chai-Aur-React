import { useParams } from "react-router-dom"

function User(){

    const {userId} = useParams()

    return(
        <h1 className="bg-gray-700 text-white text-4xl p-4">
            User: {userId}
        </h1>
    )
}

export default User