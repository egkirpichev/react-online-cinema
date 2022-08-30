import { Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/base";
import { Space } from "../../ui/theme";
import { Header } from "../Header";
import { NavBar } from "../NavBar";

export const MainTemplate = () => {
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
      <Header />
      <NavBar />
      <Outlet />
    </Wrapper>
  );
};
