import { useParams } from "react-router-dom"

export default function Details(){

    const params = useParams();
    console.log(params)

    return <div>Details</div>
}