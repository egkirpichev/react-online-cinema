import styled from "styled-components";
import { Subtitle2 } from "../../ui";
import { Space } from "../../ui/spacing";
import { Body2 } from "../../ui/typography";

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
export const Title = styled(Subtitle2)``;
export const Genre = styled(Body2)``;
