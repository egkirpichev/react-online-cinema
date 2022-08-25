import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/spacing";

export const StyledMovieCard = styled.div`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  gap: ${Space.S};
  height: 433px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 4px;
`;

export const MovieTitle = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${Color.White};
  :hover {
    color: ${Color.PrimaryDark};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
