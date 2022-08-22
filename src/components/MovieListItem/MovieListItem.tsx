import { Genre, MovieTitle, Poster, StyledMovieCard } from "./styles";

interface IProps {
  poster: string;
  title: string;
  genre: string;
}

export const MovieListItem = ({ poster, title, genre }: IProps) => {
  return (
    <StyledMovieCard>
      <Poster src={poster} alt={poster} />
      <MovieTitle>{title}</MovieTitle>
      <Genre>{genre}</Genre>
    </StyledMovieCard>
  );
};
