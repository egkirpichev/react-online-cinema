import { StyledHeader, StyledLightLogo, StyledLogo } from "./styles";

import { SearchBar } from "../SearchBar";
import { Space } from "../../ui/theme";
import { useAppSelector, useWindowSize } from "../../hooks";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { User } from "../User";
import { CustomLink } from "../CustomLink";
import { ROUTE } from "../../router";

export const Header = () => {
  const { screenWidth } = useWindowSize();
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  return (
    <StyledHeader
      $isLightMode={isLightMode}
      p={{
        S: `${Space.L} 0 ${Space.XL}`,
        XL: `${Space.L} 0 ${Space.XXL}`,
      }}
      gridTemplateColumns={{
        S: "25% auto 8%",
        XL: "13% auto 17%",
      }}
      gridColumn={{
        XL: "1/3",
      }}
      gridGap={{
        S: `${Space.M}`,
        XL: `${Space.L}`,
      }}
    >
      <CustomLink text="" to={ROUTE.HOME}>
        {isLightMode ? <StyledLightLogo /> : <StyledLogo />}
      </CustomLink>
      {screenWidth < 1440 ? <BurgerMenu /> : <User />}
      <SearchBar />
    </StyledHeader>
  );
};
