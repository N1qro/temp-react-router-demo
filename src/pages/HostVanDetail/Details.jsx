import { useOutletContext } from "react-router-dom"


export default function Details() {
    const { name, type, description, isPublic } = useOutletContext()

    return (
        <div>
            <p>Name: {name} </p>
            <br/>
            <p>Category: {type} </p>
            <br/>
            <p>Description: {description} </p>
            <br/>
            <p>Visibility: {isPublic ? "public" : "private"} </p>
        </div>
    )
}