import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { Body2, Color, Subtitle2, H2 } from "../../ui";
import { Space } from "../../ui/spacing";

export const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.S};
  max-width: 266px;
  height: 433px;
`;

export const Poster = styled.img`
  height: 357px;
  border-radius: 20px;
`;

export const MovieTitle = styled(Subtitle2)`
  color: ${Color.White};
`;
export const Genre = styled(Body2)`
  color: ${Color.Light};
`;

export const Spinner = styled(SpinnerCircular)`
  place-self: center;
`;

export const ErrorMessage = styled(H2)`
  place-self: center;
  color: ${Color.PrimaryDark};
`;
