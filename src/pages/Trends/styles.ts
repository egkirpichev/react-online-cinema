import styled from "styled-components";
import { textAlign, TextAlignProps } from "styled-system";
import { Color, H1 } from "../../ui";
import { Space } from "../../ui/theme";

export const TrendingPageTitle = styled(H1)<TextAlignProps>`
  color: ${Color.White};
  text-align: center;
  line-height: 30px;
  ${textAlign};
`;

export const TrendingMovieList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.LARGEST};
`;
