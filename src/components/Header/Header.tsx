import { StyledHeader } from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { SearchBar } from "../SearchBar";
import { Space } from "../../ui/theme";
import { useWindowSize } from "../../hooks";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const { screenWidth } = useWindowSize();

  return (
    <StyledHeader
      p={{
        S: `${Space.L} 0 ${Space.XL}`,
        XL: `${Space.L} 0 ${Space.XXL}`,
      }}
      gridTemplateColumns={{
        S: "25% auto 8%",
        XL: "21% auto 17%",
        XXL: "15% auto 15%",
      }}
      gridColumn={{
        XL: "1/3",
      }}
      gridGap={{
        S: `${Space.M}`,
        XL: `${Space.L}`,
      }}
    >
      <Logo />
      <SearchBar />
      {screenWidth < 1440 && <BurgerMenu />}
    </StyledHeader>
  );
};
