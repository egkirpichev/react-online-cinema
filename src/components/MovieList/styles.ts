import styled from "styled-components";
import { Space } from "../../ui/spacing";

export const StyledMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: ${Space.L};
`;
