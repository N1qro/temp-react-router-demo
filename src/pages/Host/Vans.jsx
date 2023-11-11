import { useEffect, useState } from "react"
import { SquareImage } from "../../components/Images"
import { CardContainer, CardInfoContainer } from "./Vans.styles"
import { Link } from "react-router-dom"
import { OrangeContainer } from "./Vans.styles"

function VanCard(props) {
    return (
        <CardContainer as={Link} to={`${props.id}`}>
            <SquareImage Size={100} src={props.image} alt={props.name} />
            <CardInfoContainer>
                <h2>{props.name}</h2>
                <h3>{props.price}$ per day</h3>
            </CardInfoContainer>
        </CardContainer>
    )
}

export default function HostVans() {
    const [hostVans, setHostVans] = useState(null)

    useEffect(() => {
        async function fetchVans() {
            const data = await fetch("/api/host/123/vans")
            const json = await data.json()
            setHostVans(json)
        }
        fetchVans()
    }, [])

    return (
        <OrangeContainer>
            <h1>Your listed vans</h1>
            {hostVans ? (
                hostVans.map(obj => <VanCard key={obj.id} {...obj} />)
            ): <p>Loading...</p>}
        </OrangeContainer>
    )
}