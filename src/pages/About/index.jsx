import wallpaper from "../../assets/simpsons_wallpaper.jpg"
import Button from "../../components/Button/button"
import Container from "../../components/Container"
import { Link } from "react-router-dom"
import { BottomContainer } from "./index.styles"
import { MediumImage } from "../../components/Images"


export default function About() {
    return (
    <Container maxWidth={500}>
        <MediumImage src={wallpaper} alt="wallpaper"/>
        <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
        <p>
            Our mission is to enliven your road trip
            with the perfect travel van rental.
            Our vans are recertified before each trip
            to ensure your travel plans can go off
            without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
            Our team is full of vanlife enthusiasts
            who know firsthand the magic of touring
            the world on 4 wheels.
        </p>

        <BottomContainer>
            <h3>
                Your destination is waiting.<br/>
                Your van is ready.
            </h3>
            <Button as={Link} to="/vans" variant="secondary">Explore our vans</Button>
        </BottomContainer>
    </Container>)
}