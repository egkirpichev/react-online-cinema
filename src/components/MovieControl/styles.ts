import styled from "styled-components";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";

export const Container = styled.div`
  display: flex;
  gap: 2px;
  overflow: hidden;
  border-radius: 10px;
`;

export const ControlButton = styled.button`
  padding: ${`${Space.XXS} ${Space.XXL}`};
  color: ${Color.Light};
  background-color: ${Color.Graphite};
  border: none;
  cursor: pointer;

  :hover {
    color: ${Color.White};
  }

  :active {
    background-color: ${Color.Secondary};
  }
`;
