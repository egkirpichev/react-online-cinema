import { useWindowSize } from "../../hooks";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { NavBar } from "../NavBar";
import { slide as StyledMenu } from "react-burger-menu";
import { ReactComponent as CloseIcon } from "../../assets/closeIcon.svg";
import { MenuWrap } from "./styles";

export const BurgerMenu = () => {
  const { screenWidth } = useWindowSize();
  const byrgerStyles = {
    bmBurgerButton: {
      position: "relative",
      gridCplumn: 3 / 4,
      width: "56px",
      height: "56px",
      padding: Space.XS,
      background: Color.PrimaryDark,
      borderRadius: "10px",
    },
    bmBurgerBars: {
      position: "relative",
      display: "block",
      height: "2px",
      width: "14px",
      background: Color.White,
    },

    bmCrossButton: {
      right: `${screenWidth > 767 ? "330px" : "196px"}`,
      top: `${screenWidth > 767 ? "40px" : "32px"}`,
      height: "56px",
      width: "56px",
      padding: "15px",
      background: Color.PrimaryDark,
      borderRadius: "10px",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0",
      height: "100vh",
      width: `${screenWidth > 767 ? "330px" : "196px"}`,
    },
    bmMenu: {
      background: Color.Black,
      padding: `${screenWidth > 767 ? Space.XXL : Space.M}`,
    },
  };

  return (
    <MenuWrap gridColumn={{ S: "3/4" }}>
      <StyledMenu right styles={byrgerStyles} customCrossIcon={<CloseIcon />}>
        <NavBar />
      </StyledMenu>
    </MenuWrap>
  );
};
