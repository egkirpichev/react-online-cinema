import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull, IMovieShort } from "../../types";
import { Color } from "../../ui";
import {
  ErrorMessage,
  Genre,
  MovieTitle,
  Poster,
  Spinner,
  StyledMovieCard,
} from "./styles";

interface IProps {
  movieListItem: IMovieShort;
}

export const MovieListItem = ({ movieListItem }: IProps) => {
  const [movie, setMovie] = useState<IMovieFull>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getMovieById(movieListItem.imdbID)
      .then((response) => {
        setMovie(response);
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
      <Poster src={movie?.Poster} alt={movie?.Poster} />
      <MovieTitle>{movie?.Title}</MovieTitle>
      <Genre>{movie?.Genre}</Genre>
    </StyledMovieCard>
  );
};
