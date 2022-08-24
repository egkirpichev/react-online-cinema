import styled from "styled-components";
import { Space } from "../../ui/spacing";

interface IProps {
  poster: string;
}

export const StyledMoviePoster = styled.div<IProps>`
  flex-grow: 1;
  height: 357px;
  padding: ${Space.S};
  background: no-repeat url(${(props) => props.poster});
  background-size: cover;
  border-radius: 20px;
`;
