import { Outlet } from "react-router-dom";
import { Container, Copyright, Footer, Header } from "./styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Space } from "../../ui/theme";
import { CustomLink } from "../CustomLink";
import { ROUTE } from "../../router";

export const AuthTemplate = () => {
  return (
    <Container
      padding={{
        S: `${Space.XL} ${Space.L} ${Space.XXL}`,
        XXL: `${Space.XL} ${Space.LARGEST}`,
      }}
    >
      <Header justifyContent={{ S: "start" }}>
        <CustomLink text={""} to={ROUTE.HOME}>
          <Logo />
        </CustomLink>
      </Header>
      <Outlet />
      <Footer>
        <Copyright>© All Rights Reserved</Copyright>
      </Footer>
    </Container>
  );
};
