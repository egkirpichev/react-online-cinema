import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";
import { Color } from "./colors";

export const Wrapper = styled.div<SpaceProps & LayoutProps>`
  display: grid;
  grid-template-columns: 306px auto;
  min-height: 100vh;
  margin: 0 auto;
  ${layout};
  ${space};
  background-color: ${Color.Black};
`;
