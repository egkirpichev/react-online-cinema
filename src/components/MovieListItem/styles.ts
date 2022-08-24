import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { Body2, Color, Subtitle2, H2 } from "../../ui";
import { Space } from "../../ui/spacing";

interface IProps {
  poster: any;
}

export const StyledMovieCard = styled.div`
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  gap: ${Space.S};
  height: 433px;
`;

export const Poster = styled.div<IProps>`
  flex-grow: 1;
  height: 357px;
  padding: ${Space.S};
  background: no-repeat url(${(props) => props.poster});
  background-size: cover;
  border-radius: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 4px;
`;

export const MovieTitle = styled(Subtitle2)`
  color: ${Color.White};
`;

export const Spinner = styled(SpinnerCircular)`
  place-self: center;
`;

export const ErrorMessage = styled(H2)`
  place-self: center;
  color: ${Color.PrimaryDark};
`;
