import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull, IMovieListItem } from "../../types";
import { Color } from "../../ui";
import { getShortMovieDescription } from "../../utils/mappers";
import {
  ErrorMessage,
  Genre,
  MovieTitle,
  Poster,
  Spinner,
  StyledMovieCard,
} from "./styles";

interface IProps {
  movieListItem: IMovieFull;
}

export const MovieListItem = ({ movieListItem }: IProps) => {
  const [movie, setMovie] = useState<IMovieListItem>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getMovieById(movieListItem.imdbID)
      .then((response) => {
        const movieListItem = getShortMovieDescription(response);
        setMovie(movieListItem);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  }, []);

  if (isLoading) {
    return <Spinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage>Something went wrong 🎞</ErrorMessage>;
  }
  return (
    <StyledMovieCard>
      <Poster src={movie?.poster} alt={movie?.poster} />
      <MovieTitle>{movie?.title}</MovieTitle>
      <Genre>{movie?.genre}</Genre>
    </StyledMovieCard>
  );
};
