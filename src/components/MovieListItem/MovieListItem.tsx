import { StyledMovieCard } from "./styles";

interface IProps {
  poster: string;
  title: string;
  genre: string;
}

export const MovieListItem = ({ poster, title, genre }: IProps) => {
  return (
    <StyledMovieCard>
      <img src={poster} alt={poster} />
      <p>{title}</p>
      <p>{genre}</p>
    </StyledMovieCard>
  );
};
