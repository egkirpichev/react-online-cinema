import styled from "styled-components";
import { grid, GridProps } from "styled-system";
import { Color, H3 } from "../../ui";
import { Space } from "../../ui/theme";

export const Slider = styled.div<GridProps>`
  display: flex;
  gap: ${Space.L};
  width: 100%;
  ${grid};
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const ItemContainer = styled.div`
  display: flex;
  min-width: 272px;
`;

export const Arrow = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  color: ${Color.White};
  cursor: pointer;

  :hover {
    color: ${Color.PrimaryDark};
  }

  :disabled {
    opacity: 0.3;
    cursor: auto;
  }
`;

export const Title = styled(H3)`
  width: 100%;
  text-align: left;
  color: ${Color.White};
`;

export const Header = styled.header`
  display: flex;
`;
