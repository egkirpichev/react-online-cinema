import styled from "styled-components";
import { grid, GridProps } from "styled-system";

export const StyledSearchBar = styled.div<GridProps>`
  grid-column: 1/3;
  ${grid}
  width: 100%;
`;
