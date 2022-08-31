import styled from "styled-components";
import { grid, GridProps } from "styled-system";

export const MenuWrap = styled.div<GridProps>`
  grid-column: 2/3;
  ${grid}
`;
