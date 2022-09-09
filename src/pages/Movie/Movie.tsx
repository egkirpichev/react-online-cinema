import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";
import { SearchError } from "../../components/SearchError";
import { SearchSpinner } from "../../components/SearchSpinner";
import { getMovieCardInfo, getMovieFacts } from "../../mappers/mappers";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieCard, IMovieFactsList } from "../../types";

export const Movie = () => {
  const [movie, setMovie] = useState<IMovieCard>();
  const [movieFactsList, setMovieFactsList] = useState<IMovieFactsList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { imdbID } = useParams();

  useEffect(() => {
    if (imdbID)
      OMDbApi.getMovieById(imdbID)
        .then((movie) => {
          const movieCard = getMovieCardInfo(movie);
          const movieFactsList = getMovieFacts(movieCard);
          setMovie(movieCard);
          setMovieFactsList(movieFactsList);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.message);
        });
  }, []);

  if (isLoading) {
    return <SearchSpinner />;
  }

  if (errorMessage) {
    return <SearchError message={errorMessage} />;
  }

  return (
    <MovieCard
      movie={movie as IMovieCard}
      movieFactsList={movieFactsList as IMovieFactsList}
    />
  );
};
