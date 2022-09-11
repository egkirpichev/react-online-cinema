import { useAppSelector, useToggle, useWindowSize } from "../../hooks";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { slide as StyledMenu } from "react-burger-menu";
import { CrossIcon, FilterIcon, MenuWrap } from "./styles";
import { FiltersForm } from "../FiltersForm";

export const SearchFilters = () => {
  const { screenWidth } = useWindowSize();
  const [isOpen, setIsOpen] = useToggle();
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const styles = {
    bmBurgerButton: {
      position: "relative",
      width: "56px",
      height: "56px",
      padding: "15px 10px",
      background: "transparent",
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
      width: `${screenWidth > 767 ? "518px" : "320px"}`,
    },
    bmMenu: {
      display: "flex",
      background: isLightMode ? Color.White : Color.Black,
      padding: `${screenWidth > 767 ? `50px ${Space.S}` : `50px ${Space.S}`}`,
    },
    bmItemList: {
      display: "flex",
      width: "100%",
    },
  };

  return (
    <MenuWrap gridColumn={{ S: "3/4" }}>
      <StyledMenu
        right
        styles={styles}
        customCrossIcon={<CrossIcon />}
        customBurgerIcon={<FilterIcon />}
        onOpen={setIsOpen}
        onClose={setIsOpen}
        isOpen={isOpen}
      >
        <FiltersForm setIsOpen={setIsOpen} />
      </StyledMenu>
    </MenuWrap>
  );
};
