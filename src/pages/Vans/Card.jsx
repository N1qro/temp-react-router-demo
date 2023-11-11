import { Button } from "../../components/Button/Button.styles"
import { CardContainer } from "./index.styles"
import { MediumImage } from "../../components/Images"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"


export default function Card(props) {
    const [searchParams] = useSearchParams()

    return (
        <CardContainer>
            <Link to={props.id.toString()} state={{ search: `?${searchParams.toString()}`, typeFilter: searchParams.get("type")}} >
                <MediumImage src={props.image} alt={props.name}/>
                <h3>{props.name}<br/>${props.price}/day</h3>
                <Button variant={props.type.toLowerCase()}>{props.type}</Button>
            </Link>
        </CardContainer>
    )
}