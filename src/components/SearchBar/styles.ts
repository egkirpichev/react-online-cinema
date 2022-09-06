import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Color } from "../../ui";
import { Input } from "../../ui/typography";

interface IProps {
  isLightMode: boolean;
}

export const StyledSearchBar = styled.div<GridProps>`
  grid-column: 1/3;
  ${grid}
  width: 100%;
`;

export const StyledInput = styled(Input)<IProps>`
  background-color: ${({ isLightMode }) =>
    isLightMode ? Color.White : Color.Dark};
  border-color: ${({ isLightMode }) =>
    isLightMode ? Color.Secondary : Color.Black};

  :focus {
    color: ${({ isLightMode }) => (isLightMode ? Color.Dark : Color.White)};
  }
`;
