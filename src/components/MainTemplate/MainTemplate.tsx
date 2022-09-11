import { Outlet } from "react-router-dom";
import { useAppSelector, useWindowSize } from "../../hooks";
import { Space } from "../../ui/theme";
import { FilterBadges } from "../FilterBadges";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Background, Main, Wrapper } from "./styles";

export const MainTemplate = () => {
  const { screenWidth } = useWindowSize();
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  return (
    <Background
      $isLightMode={isLightMode}
      padding={{
        S: `0 ${Space.L} ${Space.L}`,
        XXL: `0 ${Space.LARGEST} ${Space.L}`,
      }}
    >
      <Wrapper maxWidth={{ XXL: "1920px" }} $isLightMode={isLightMode}>
        <Header />
        <Main
          gridTemplateColumns={{
            XL: "15% 85%",
          }}
          gridRowGap={{
            default: `${Space.M}`,
            S: `${Space.L}`,
            L: `${Space.XL}`,
            XL: `${Space.XXL}`,
          }}
        >
          {screenWidth > 1439 && <NavBar />}
          <FilterBadges />
          <Outlet />
        </Main>
      </Wrapper>
    </Background>
  );
};
