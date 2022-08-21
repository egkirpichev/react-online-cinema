import { IMovie } from "../../types/types";
import { MovieListItem } from "../MovieListItem";
import { StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
}

export const MovieList = ({ movies }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return (
          <MovieListItem
            poster={movie.Poster}
            title={movie.Title}
            genre={movie.Genre}
          />
        );
      })}
    </StyledMovieList>
  );
};
