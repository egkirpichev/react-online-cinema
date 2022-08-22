import styled from "styled-components";
import { Body2, Color, Subtitle2 } from "../../ui";
import { Space } from "../../ui/spacing";

interface IProps {
  poster: string;
}

export const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.S};
  max-width: 266px;
  height: 433px;
`;

export const Poster = styled.img`
  height: 357px;
  border-radius: 20px;
`;

export const MovieTitle = styled(Subtitle2)`
  color: ${Color.White};
`;
export const Genre = styled(Body2)`
  color: ${Color.Light};
`;
