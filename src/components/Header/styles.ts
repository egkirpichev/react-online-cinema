import styled from "styled-components";
import { grid, GridProps, space, SpaceProps } from "styled-system";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as LightLogo } from "../../assets/logo-light.svg";

interface IProps {
  $isLightMode: boolean;
}

export const StyledHeader = styled.header<GridProps & SpaceProps & IProps>`
  position: sticky;
  top: -1px;
  z-index: 10;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: ${Space.L} ${Space.LARGEST};
  align-items: center;
  justify-items: space-between;
  ${grid};
  width: 100%;
  padding: ${Space.M} 0;
  ${space}
  background-color: ${({ $isLightMode }) =>
    $isLightMode ? Color.White : Color.Black};
`;

export const StyledLogo = styled(Logo)`
  justify-self: start;
`;

export const StyledLightLogo = styled(LightLogo)`
  justify-self: start;
`;
