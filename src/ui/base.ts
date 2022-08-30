import styled from "styled-components";
import {
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { Color } from "./colors";
import { Space } from "./theme";

export const Wrapper = styled.div<SpaceProps & LayoutProps & GridProps>`
  display: grid;
  grid-template-columns: 100%;
  min-height: 100vh;
  max-width: 100vw;
  margin: 0 ${Space.S} ${Space.M};
  ${layout};
  ${space};
  ${grid};
  background-color: ${Color.Black};
`;
