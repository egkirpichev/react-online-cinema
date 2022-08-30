import styled from "styled-components";
import { position, PositionProps, space, top } from "styled-system";
import { Space } from "../../ui/theme";

interface IProps {
  offset: number;
}

export const StyledNavBar = styled.nav`
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  gap: ${Space.XXL};
`;

export const Navigation = styled.div<IProps>`
  position: sticky;
  top: ${(props) => props.offset}px;
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
`;
