import { Outlet } from "react-router-dom";
import { Wrapper } from "../../ui/base";
import { NavBar } from "../NavBar";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <NavBar />
      <Outlet />
    </Wrapper>
  );
};
