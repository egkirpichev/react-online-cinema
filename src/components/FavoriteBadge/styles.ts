import styled from "styled-components";
import { Color, Subtitle3 } from "../../ui";

export const StyledBadge = styled(Subtitle3)`
  position: absolute;
  display: inline-block;
  padding: 2px 8px;
  margin: 10px;
  color: ${Color.PrimaryDark};
  background-color: ${Color.Graphite};
  border-radius: 6px;
`;
