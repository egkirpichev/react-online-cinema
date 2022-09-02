import styled from "styled-components";
import { Color, Subtitle2 } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`;

export const Message = styled(Subtitle2)`
  color: ${Color.White};
  text-align: center;
`;

export const Window = styled.div`
  width: 250px;
  padding: ${Space.XS};
  background-color: ${Color.Graphite};
  border-radius: 10px;
`;
