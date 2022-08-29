import { Navigation, StyledNavBar } from "./styles";
import { Endpoint } from "../../router";
import { CustomLink } from "../CustomLink";
import homeIcon from "../../assets/home.svg";
import trendsIcon from "../../assets/trends.svg";
import favouritesIcon from "../../assets/favourites.svg";
import settingsIcon from "../../assets/settings.svg";
import { useRef } from "react";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Navigation>
        <CustomLink to={Endpoint.HOME} text="Home" icon={homeIcon}></CustomLink>
        <CustomLink to={Endpoint.TRENDS} text="Trends" icon={trendsIcon} />
        <CustomLink
          to={Endpoint.FAVOURITES}
          text="Favourites"
          icon={favouritesIcon}
        />
        <CustomLink
          to={Endpoint.SETTINGS}
          text="Settings"
          icon={settingsIcon}
        />
      </Navigation>
    </StyledNavBar>
  );
};
