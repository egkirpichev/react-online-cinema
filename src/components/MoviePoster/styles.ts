import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

export const StyledMoviePoster = styled.img<LayoutProps>`
  justify-self: center;
  height: 365px;
  max-width: 100%;
  ${layout};
  border-radius: 20px;
`;

export const Poster = styled.div`
  position: relative;
`;

export const Badges = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
`;
