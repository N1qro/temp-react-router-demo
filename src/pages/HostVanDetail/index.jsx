import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CardContainer, CardInfoContainer } from "../Host/Vans.styles"
import { SquareImage } from "../../components/Images"
import { OrangeContainer } from "../Host/Vans.styles"
import { Outlet } from "react-router-dom"
import { Navigation, StyledLink } from "../../components/Header/Header.styles"

export default function HostVanDetail() {
    const [van, setVan] = useState(null)
    const params = useParams()

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`/api/van/${params.id}`)
            const json = await data.json()
            setVan(json)
        }
        fetchData()
    }, [params.id])

    return (
        <OrangeContainer>
            <StyledLink to=".." relative="path">Go to all vans..</StyledLink>
            {van ? (
              <>
                <CardContainer>
                    <SquareImage Size={100} src={van.image} alt={van.name}/>
                    <CardInfoContainer>
                        <h2>{van.name}</h2>
                        <h3>{van.price}$ per day</h3>
                    </CardInfoContainer> 
                </CardContainer>
                <Navigation>
                    <StyledLink to="." end>Details</StyledLink>
                    <StyledLink to="pricing">Pricing</StyledLink>
                    <StyledLink to="photos">Photos</StyledLink>
                </Navigation>
                <Outlet context={van} />
              </>
            ) : <p>Loading...</p>}
        </OrangeContainer>
    )
}