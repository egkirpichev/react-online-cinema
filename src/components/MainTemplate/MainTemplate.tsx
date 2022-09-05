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
        XXL: `0 ${Space.LARGEST} ${Space.L}`,
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
        {screenWidth > 1439 && <NavBar />}
        <Outlet />
      </Main>
    </Wrapper>
  );
};
