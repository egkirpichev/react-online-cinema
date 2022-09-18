import { Navigation, StyledNavBar } from "./styles";
import { ROUTE } from "router";
import { CustomLink } from "components";
import { RiHome6Line } from "react-icons/ri";
import { IoMdFlame } from "react-icons/io";
import { HiBookmark } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

interface IProps {
  offset: number;
}

export const NavBar = ({ offset }: IProps) => {
  return (
    <StyledNavBar>
      <Navigation offset={offset}>
        <CustomLink to={ROUTE.HOME} text="Home">
          <RiHome6Line />
        </CustomLink>
        <CustomLink to={ROUTE.TRENDS} text="Trends">
          <IoMdFlame />
        </CustomLink>
        <CustomLink to={ROUTE.FAVOURITES} text="Favorites">
          <HiBookmark />
        </CustomLink>
        <CustomLink to={ROUTE.SETTINGS} text="Settings">
          <IoMdSettings />
        </CustomLink>
      </Navigation>
    </StyledNavBar>
  );
};
