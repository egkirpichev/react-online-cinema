import { PropsWithRef, ReactInstance } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReferenceEntry } from "typescript";
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
