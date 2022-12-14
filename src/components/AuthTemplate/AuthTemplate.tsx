import { Outlet } from "react-router-dom";
import { Container, Copyright, Footer, Header } from "./styles";
import { Space } from "ui";
import { CustomLink } from "components";
import { ROUTE } from "router";
import { Logo } from "assets";

export const AuthTemplate = () => {
  return (
    <Container
      padding={{
        S: `${Space.L} ${Space.L} ${Space.XXL}`,
        XXL: `${Space.L} ${Space.LARGEST}`,
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
