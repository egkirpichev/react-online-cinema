import styled from "styled-components";
import { Color } from "../../ui";

export const StyledInput = styled.input`
  padding: 16px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: ${Color.Graphite};
  border: none;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;