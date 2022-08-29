import { Navigation, StyledNavBar } from "./styles";
import { Endpoint } from "../../router";
import { CustomLink } from "../CustomLink";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as TrendsIcon } from "../../assets/trends.svg";
import { ReactComponent as FavouritesIcon } from "../../assets/favourites.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Navigation>
        <CustomLink to={Endpoint.HOME} text="Home">
          <HomeIcon />
        </CustomLink>
        <CustomLink to={Endpoint.TRENDS} text="Trends">
          <TrendsIcon />
        </CustomLink>
        <CustomLink to={Endpoint.FAVOURITES} text="Favourites">
          <FavouritesIcon />
        </CustomLink>
        <CustomLink to={Endpoint.SETTINGS} text="Settings">
          <SettingsIcon />
        </CustomLink>
      </Navigation>
    </StyledNavBar>
  );
};
