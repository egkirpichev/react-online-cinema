import { NavBarLink, Navigation, StyledNavBar } from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Endpoint } from "../../router";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      <Navigation>
        <NavBarLink to={Endpoint.HOME}>Home</NavBarLink>
        <NavBarLink to={Endpoint.TRENDS}>Trends</NavBarLink>
        <NavBarLink to={Endpoint.FAVOURITES}>Favourites</NavBarLink>
        <NavBarLink to={Endpoint.SETTINGS}>Settings</NavBarLink>
      </Navigation>
    </StyledNavBar>
  );
};
