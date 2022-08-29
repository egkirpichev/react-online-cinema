import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Body2, Color } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledFooter = styled.footer<GridProps>`
  display: flex;
  place-items: center;
  ${grid};
`;

export const LoadMore = styled.button`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: ${Space.SMALLEST} ${Space.S};
  width: 161px;
  background-color: ${Color.Graphite};
  border: none;
  border-radius: 40px;
`;

export const Text = styled(Body2)`
  color: ${Color.White};
`;
