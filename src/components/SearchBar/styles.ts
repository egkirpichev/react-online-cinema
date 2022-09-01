import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Input } from "../../ui/typography";

export const StyledSearchBar = styled.div<GridProps>`
  grid-column: 1/3;
  ${grid}
  width: 100%;
`;

export const StyledInput = styled(Input)``;
