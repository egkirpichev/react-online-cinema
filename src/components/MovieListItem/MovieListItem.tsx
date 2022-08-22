import { Genre, Poster, StyledMovieCard, Title } from "./styles";

interface IProps {
  poster: string;
  title: string;
  genre: string;
}

export const MovieListItem = ({ poster, title, genre }: IProps) => {
  return (
    <StyledMovieCard>
      <Poster src={poster} alt={poster} />
      <Title>{title}</Title>
      <Genre>{genre}</Genre>
    </StyledMovieCard>
  );
};
