import { SpinnerCircular } from "spinners-react";
import { IMovie } from "../../types/types";
import { Color, H2 } from "../../ui";
import { MovieListItem } from "../MovieListItem";
import { ErrorMessage, Spinner, StyledMovieList } from "./styles";

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
  errorMessage: string;
}

export const MovieList = ({ movies, isLoading, errorMessage }: IProps) => {
  if (isLoading) {
    return <Spinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage>Something went wrong, try again 🍿</ErrorMessage>;
  }

  return (
    <StyledMovieList>
      {movies.map(({ Poster, Title, Genre, imdbID }) => {
        return (
          <MovieListItem
            poster={Poster}
            title={Title}
            genre={Genre}
            key={imdbID}
          />
        );
      })}
    </StyledMovieList>
  );
};
