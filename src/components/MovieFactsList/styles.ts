import styled from "styled-components";
import { Body2, Color, Subtitle3 } from "../../ui";
import { Space } from "../../ui/spacing";

export const MovieFacts = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: ${Space.S};
`;
export const Fact = styled(Subtitle3)`
  color: ${Color.Light};
`;

export const Value = styled(Body2)`
  color: ${Color.White};
`;
