import { Outlet } from "react-router-dom";
import { StyledLink, Navigation } from "../components/Header/Header.styles";
import { HostContainer } from "./layout.styles";

export default function HostLayout () {
    return (
        <>
            <HostContainer>
                <Navigation>
                    <StyledLink to="/host" end>Dashboard</StyledLink>
                    <StyledLink to="/host/income" >Income</StyledLink>
                    <StyledLink to="/host/vans">Vans</StyledLink>
                    <StyledLink to="/host/reviews">Reviews</StyledLink>
                </Navigation>
            </HostContainer>
            <Outlet />
        </>
    )
}