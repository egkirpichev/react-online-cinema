import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledNavBar = styled.nav`
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  gap: ${Space.XXL};
`;

export const Navigation = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
`;
