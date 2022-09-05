import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Space } from "../../ui/theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Color } from "../../ui";

export const MenuWrap = styled.div<GridProps>`
  grid-column: 2/3;
  ${grid}
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  fill: ${Color.White};
`;

export const CrossIcon = styled(IoCloseSharp)`
  fill: ${Color.White};
`;
