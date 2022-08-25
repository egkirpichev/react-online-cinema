import styled from "styled-components";
import { Body2, Color, H1 } from "../../ui";
import { Space } from "../../ui/spacing";

export const StyledMovieCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: ${Space.L};
  max-width: 1186px;
`;

export const Control = styled.div`
  display: flex;
  gap: ${Space.M};
`;

export const Title = styled(H1)`
  color: ${Color.White};
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
`;

export const Header = styled.div``;

export const Plot = styled(Body2)`
  color: ${Color.White};
`;
