import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull } from "../../types";
import { Color } from "../../ui";
import { Spinner } from "../MovieList/styles";
import { ErrorMessage } from "../MovieListItem/styles";
import { MoviePoster } from "../MoviePoster";
import { StyledMovieCard } from "./styles";

export const MovieCard = () => {
  const [movie, setMovie] = useState<IMovieFull>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { imdbID } = useParams();

  useEffect(() => {
    if (imdbID)
      OMDbApi.getMovieById(imdbID)
        .then((movie) => {
          setMovie(movie);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.message);
        });
  }, [imdbID]);

  if (isLoading) {
    return <Spinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage>Something went wrong 🎞</ErrorMessage>;
  }

  if (movie) {
    return (
      <StyledMovieCard>
        <MoviePoster poster={movie.Poster}></MoviePoster>
      </StyledMovieCard>
    );
  } else return <ErrorMessage>Something went wrong 🎞</ErrorMessage>;
};
