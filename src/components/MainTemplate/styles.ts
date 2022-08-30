import styled from "styled-components";
import {
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";

export const Wrapper = styled.div<SpaceProps & LayoutProps & GridProps>`
  grid-template-columns: 100%;
  min-height: 100vh;
  max-width: 100vw;
  margin: 0 ${Space.S} ${Space.M};
  ${layout};
  ${space};
  background-color: ${Color.Black};
`;

export const Main = styled.main<GridProps>`
  display: grid;
  ${grid};
`;
