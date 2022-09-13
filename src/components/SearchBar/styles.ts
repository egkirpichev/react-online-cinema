import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Color } from "../../ui";
import { Input } from "../../ui/typography";

interface IProps {
  $isLightMode: boolean;
}

export const StyledSearchBar = styled.div<GridProps>`
  grid-column: 1/3;
  ${grid}
  display: flex;
  width: 100%;
  background-color: ${Color.Dark};
  border: 1px solid ${Color.Black};
  border-radius: 10px;
`;

export const StyledInput = styled(Input)<IProps>`
  background-color: ${({ $isLightMode }) => ($isLightMode ? Color.White : Color.Dark)};
  border: none;

  :focus {
    border: none;
  }
`;
