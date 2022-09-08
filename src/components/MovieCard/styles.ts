import styled from "styled-components";
import {
  grid,
  GridProps,
  justifyItems,
  JustifyItemsProps,
  layout,
  LayoutProps,
} from "styled-system";
import { Body2, Color, H1, Subtitle3 } from "../../ui";
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
  margin-bottom: ${Space.XS};
`;
export const Description = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
  max-width: 100%;
  ${layout};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Plot = styled(Body2)`
  color: ${Color.White};
`;

export const Stats = styled.div`
  display: flex;
  gap: ${Space.S};
`;

export const StatsBadge = styled(Subtitle3)`
  display: inline-block;
  padding: 2px 8px;
  color: ${Color.White};
  background-color: ${Color.Graphite};
  border-radius: 6px;
`;
