import { Outlet } from "react-router-dom";
import { Container, Copyright, Footer, Header } from "./styles";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Space } from "../../ui/theme";

export const AuthTemplate = () => {
  return (
    <Container
      padding={{
        S: `${Space.XL} ${Space.L} ${Space.XXL}`,
        XXL: `${Space.XL} ${Space.LARGEST}`,
      }}
    >
      <Header justifyContent={{ S: "start" }}>
        <Logo />
      </Header>
      <Outlet />
      <Footer>
        <Copyright>© All Rights Reserved</Copyright>
      </Footer>
    </Container>
  );
};
