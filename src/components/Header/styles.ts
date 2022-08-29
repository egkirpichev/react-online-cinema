import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Space } from "../../ui/theme";

export const StyledHeader = styled.header<GridProps>`
  display: grid;
  grid-template-columns: 162px 56px;
  grid-gap: ${Space.L} ${Space.LARGEST};
  ${grid};
  width: 100%;
`;
