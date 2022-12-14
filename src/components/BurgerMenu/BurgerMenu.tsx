import { useToggle, useWindowSize } from "hooks";
import { Color, Space } from "ui";
import { slide as StyledMenu } from "react-burger-menu";
import { BurgerIcon, CrossIcon, MenuWrap, Navigation } from "./styles";
import { CustomLink } from "components";
import { RiHome6Line } from "react-icons/ri";
import { ROUTE } from "router";
import { IoMdFlame, IoMdSettings } from "react-icons/io";
import { HiBookmark } from "react-icons/hi";
import { useAppSelector } from "store";

export const BurgerMenu = () => {
  const { screenWidth } = useWindowSize();
  const [isOpen, setIsOpen] = useToggle();
  const { isLightMode } = useAppSelector(({ persistedReducer }) => persistedReducer.user);

  const byrgerStyles = {
    bmBurgerButton: {
      position: "relative",
      gridCplumn: 3 / 4,
      width: "56px",
      height: "56px",
      margin: "0px 0px 0px auto",
      padding: "15px 10px",
      background: isOpen ? Color.PrimaryLight : Color.PrimaryDark,
      borderRadius: "10px",
    },
    bmCrossButton: {
      height: "56px",
      width: "56px",
      marginTop: "30px",
      padding: "15px",
      opacity: isOpen ? "1" : "0.6",
    },
    bmMenuWrap: {
      position: "fixed",
      top: "0",
      height: "100vh",
      width: `${screenWidth > 767 ? "330px" : "100vw"}`,
    },
    bmMenu: {
      display: "flex",
      background: isLightMode ? Color.White : Color.Black,
      padding: `${screenWidth > 767 ? `150px ${Space.XXL}` : `150px ${Space.M}`}`,
    },
    bmItemList: {
      display: "flex",
    },
    bmOverlay: {
      position: "fixed",
      top: "0",
      left: "0",
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <MenuWrap gridColumn={{ S: "3/4" }}>
      <StyledMenu
        right
        styles={byrgerStyles}
        customCrossIcon={<CrossIcon $isLightMode={isLightMode} />}
        customBurgerIcon={<BurgerIcon />}
        onOpen={setIsOpen}
        onClose={setIsOpen}
        isOpen={isOpen}
      >
        <Navigation onClick={setIsOpen} style={{ display: "flex" }}>
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
      </StyledMenu>
    </MenuWrap>
  );
};
