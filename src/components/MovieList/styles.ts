import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Space } from "../../ui/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.LARGEST};
`;

export const StyledMovieList = styled.div<GridProps>`
  display: grid;
  place-items: center;
  grid-gap: ${Space.L};
  ${grid}
`;
