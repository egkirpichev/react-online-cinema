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
