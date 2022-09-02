import styled from "styled-components";
import {
  flexbox,
  FlexboxProps,
  FlexProps,
  space,
  SpaceProps,
} from "styled-system";
import background from "../../assets/backround.png";
import { Body2 } from "../../ui";
import { Space } from "../../ui/theme";

export const Container = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  max-width: 100vw;
  padding: ${Space.M} ${Space.S} ${Space.XL};
  ${space}
  background:   linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 23.56%
    ),
    url(${background});
  margin: 0;
`;

export const Header = styled.header<FlexboxProps>`
  display: flex;
  justify-content: center;
  ${flexbox}
`;

export const Footer = styled.footer``;

export const Copyright = styled(Body2)`
  text-align: center;
`;