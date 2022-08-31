import { Navigation, StyledNavBar } from "./styles";
import { ROUTE } from "../../router";
import { CustomLink } from "../CustomLink";
import { RiHome6Line } from "react-icons/ri";
import { IoMdFlame } from "react-icons/io";
import { HiBookmark } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

export const NavBar = () => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    if (navBarRef.current) setOffset(navBarRef.current.offsetTop);
  }, []);

  return (
    <StyledNavBar>
      <Navigation offset={offset} ref={navBarRef}>
        <CustomLink to={ROUTE.HOME} text="Home">
          <RiHome6Line />
        </CustomLink>
        <CustomLink to={ROUTE.TRENDS} text="Trends">
          <IoMdFlame />
        </CustomLink>
        <CustomLink to={ROUTE.FAVOURITES} text="Favourites">
          <HiBookmark />
        </CustomLink>
        <CustomLink to={ROUTE.SETTINGS} text="Settings">
          <IoMdSettings />
        </CustomLink>
      </Navigation>
    </StyledNavBar>
  );
};
