import { Link } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { Color, Subtitle2, H2 } from "../../ui";
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

export const Spinner = styled(SpinnerCircular)`
  place-self: center;
`;

export const ErrorMessage = styled(H2)`
  place-self: center;
  color: ${Color.PrimaryDark};
`;
