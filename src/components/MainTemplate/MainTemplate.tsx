import { Outlet } from "react-router-dom";
import { useWindowSize } from "../../hooks";
import { Space } from "../../ui/theme";
import { Header } from "../Header";
import { NavBar } from "../NavBar";
import { Main, Wrapper } from "./styles";

export const MainTemplate = () => {
  const { screenWidth } = useWindowSize();

  return (
    <Wrapper
      margin={{
        S: `0 ${Space.L} ${Space.L}`,
        M: `0 ${Space.XL} ${Space.L}`,
        L: `0 auto ${Space.L}`,
        XXL: `0 ${Space.LARGEST} ${Space.L}`,
      }}
      maxWidth={{
        L: "928px",
        XL: "1184px",
        XXL: "1920px",
      }}
    >
      <Header />
      <Main
        gridTemplateColumns={{
          XL: "25% 75%",
          XXL: "17% 83%",
        }}
        gridRowGap={{
          default: `${Space.M}`,
          S: `${Space.L}`,
          L: `${Space.XL}`,
          XL: `${Space.XXL}`,
        }}
      >
        {screenWidth > 1280 && <NavBar />}
        <Outlet />
      </Main>
    </Wrapper>
  );
};
