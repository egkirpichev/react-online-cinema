import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledHeader = styled.header<GridProps>`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 162px 56px;
  grid-gap: ${Space.L} ${Space.LARGEST};
  align-items: center;
  ${grid};
  width: 100%;
  background-color: ${Color.Black};
`;
