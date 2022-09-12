import styled from "styled-components";
import { grid, GridProps } from "styled-system";

export const Slider = styled.div<GridProps>`
  display: flex;
  overflow: hidden;
  width: 100%;
  ${grid};
`;
