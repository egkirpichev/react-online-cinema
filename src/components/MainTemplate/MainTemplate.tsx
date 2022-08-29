import { Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/base";
import { Space } from "../../ui/theme";
import { NavBar } from "../NavBar";

export const MainTemplate = () => {
  return (
    <Wrapper
      margin={{
        default: `${Space.M} ${Space.S}`,
        S: `${Space.L} ${Space.L}`,
        M: `${Space.L} ${Space.XL}`,
        L: `${Space.L} auto`,
        XXL: `${Space.L} ${Space.LARGEST}`,
      }}
      maxWidth={{
        default: "100vw",
        L: "928px",
        XL: "1184px",
        XXL: "1920px",
      }}
    >
      <NavBar />
      <Outlet />
    </Wrapper>
  );
};
