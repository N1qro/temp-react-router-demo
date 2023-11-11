import { 
    HomeContainer,
    Caption,
    Description
} from "./index.styles"
import Button from "../../components/Button/button"
import { Link } from "react-router-dom"


export default function Home() {
    return (
    <HomeContainer>
        <Caption>You got the travel plans, we got the travel vans.</Caption>
        <Description>
            Add adventure to your life by joining the #vanlife movement. 
            Rent the perfect van to make your perfect road trip.
        </Description>
        <Button as={Link} to="/vans" variant="primary">Find your van!</Button>
    </HomeContainer>)
}