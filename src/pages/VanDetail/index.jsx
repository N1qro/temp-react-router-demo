import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Container from "../../components/Container"
import { SmallImage } from "../../components/Images"
import Button from "../../components/Button/button"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"


export default function VanDetail() {
    const [vanData, setVanData] = useState(null)
    const params = useParams()
    const location = useLocation()

    useEffect(() => {
        async function fetchVan() {
            const response = await fetch(`/api/van/${params.id}`)
            const jsonData = await response.json()
            setVanData(jsonData)
        }
        fetchVan()
    }, [params.id])

    const goBackText = location.state?.typeFilter || "all"
    const goBackURL = location.state?.search || ""

    return (
        vanData ? (
            <Container>
                <SmallImage src={vanData.image} alt={vanData.name}/>
                <h2>{vanData.name} - ${vanData.price}/day</h2>
                <Container maxWidth={400}>
                    <p>{vanData.description}</p>
                </Container>
                <Button variant="secondary">Rent this van</Button>
                <Button as={Link} to={`..${goBackURL}`} relative="path" variant="rugged">
                    Go back to {goBackText} vans
                </Button>
            </Container>
        ) : <h1>Loading...</h1>
    )
}