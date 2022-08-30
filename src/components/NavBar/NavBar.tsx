import { Navigation, StyledNavBar } from "./styles";
import { Endpoint } from "../../router";
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
        <CustomLink to={Endpoint.HOME} text="Home">
          <RiHome6Line />
        </CustomLink>
        <CustomLink to={Endpoint.TRENDS} text="Trends">
          <IoMdFlame />
        </CustomLink>
        <CustomLink to={Endpoint.FAVOURITES} text="Favourites">
          <HiBookmark />
        </CustomLink>
        <CustomLink to={Endpoint.SETTINGS} text="Settings">
          <IoMdSettings />
        </CustomLink>
      </Navigation>
    </StyledNavBar>
  );
};
