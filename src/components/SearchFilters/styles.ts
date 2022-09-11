import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Space } from "../../ui/theme";
import { BsFilterRight } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { Color } from "../../ui";

export const MenuWrap = styled.div<GridProps>`
  grid-column: 2/3;
  ${grid}
`;

export const FilterIcon = styled(BsFilterRight)`
  fill: ${Color.White};
`;
export const CrossIcon = styled(IoCloseSharp)`
  fill: ${Color.White};
`;
