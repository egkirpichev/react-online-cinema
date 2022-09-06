import { Link } from "react-router-dom";
import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";
import { Body2, Color } from "../../ui";
import { Space } from "../../ui/theme";

interface IProps {
  isLightMode: boolean;
}

export const StyledMovieCard = styled.div<LayoutProps>`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  gap: ${Space.S};
  max-height: 437px;
  ${layout}
  max-width: 272px;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 4px;
`;

export const MovieTitle = styled(Link)<IProps>`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${({ isLightMode }) => (isLightMode ? Color.Dark : Color.White)};
  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const Released = styled(Body2)<IProps>`
  color: ${({ isLightMode }) => (isLightMode ? Color.Secondary : Color.Light)};
`;
