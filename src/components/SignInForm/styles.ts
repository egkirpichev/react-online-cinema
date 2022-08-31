import styled from "styled-components";
import { Color, H2 } from "../../ui";
import { Space } from "../../ui/theme";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Space.L};
  max-width: 100%;
  padding: ${Space.L};
  background: ${Color.Dark};
`;
export const Title = styled(H2)`
  color: ${Color.White};
`;
