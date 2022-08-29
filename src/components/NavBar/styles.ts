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
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
`;

export const NavBarLink = styled(NavLink)`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.Secondary};
  text-decoration: none;

  :hover {
    color: ${Color.PrimaryLight};
  }

  :active {
    color: ${Color.PrimaryDark};
  }

  :disabled {
    color: ${Color.Graphite};
  }
`;
