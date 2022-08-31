import styled from "styled-components";
import { Color, Subtitle3 } from "../../ui";

export const StyledInput = styled.input`
  padding: 16px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary};
  background-color: ${Color.Graphite};
  border: 1px solid ${Color.Black};
  border-radius: 10px;

  :focus {
    color: ${Color.White};
    outline: none;
    border: 1px solid ${Color.PrimaryDark};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled(Subtitle3)`
  color: ${Color.White};
`;
