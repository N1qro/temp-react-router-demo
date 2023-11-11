import { Outlet } from "react-router-dom"
import {
	StyledHeader,
	StyledLink,
	SiteBrand,
	Navigation
} from "./Header.styles"



export default function Header() {
	return (
		<>
			<StyledHeader>
				<SiteBrand to="/">#VANLIFE</SiteBrand>
				<Navigation>
					<StyledLink to="/host">Host</StyledLink>
					<StyledLink to="/about">About</StyledLink>
					<StyledLink to="/vans">Vans</StyledLink>
				</Navigation>
			</StyledHeader>
		</>
	)
}