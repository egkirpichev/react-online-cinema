import styled from "styled-components";
import {
  grid,
  GridProps,
  justifyItems,
  JustifyItemsProps,
  layout,
  LayoutProps,
} from "styled-system";
import { Body2, Color, H1 } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledMovieCard = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: ${Space.M};
  justify-content: end;
  ${grid}
  width: 100%;
`;

export const Control = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Space.M};
`;

export const Title = styled(H1)`
  color: ${Color.White};
`;
export const Description = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
  max-width: 100%;
  ${layout};
`;

export const Header = styled.div``;

export const Plot = styled(Body2)`
  color: ${Color.White};
`;
