import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/spacing";

export const StyledMovieList = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: ${Space.L};
`;

export const Spinner = styled(SpinnerCircular)`
  place-self: center;
`;

export const ErrorMessage = styled(H2)`
  place-self: center;
  color: ${Color.PrimaryDark};
`;
