import styled from "styled-components";
import {
  grid,
  gridGap,
  GridGapProps,
  GridProps,
  justifyItems,
  JustifyItemsProps,
  LayoutProps,
  SpaceProps,
} from "styled-system";
import { Body2, Color, H1 } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledMovieCard = styled.div<GridProps & JustifyItemsProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${Space.M};
  justify-items: center;
  ${grid}
  ${justifyItems}
	width: 100%;
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
  max-width: 80%;
`;

export const Header = styled.div``;

export const Plot = styled(Body2)`
  color: ${Color.White};
`;
