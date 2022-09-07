import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

export const StyledMoviePoster = styled.img<LayoutProps>`
  justify-self: center;
  max-height: 365px;
  max-width: 100%;
  ${layout};
  border-radius: 20px;
`;

export const Poster = styled.div``;
