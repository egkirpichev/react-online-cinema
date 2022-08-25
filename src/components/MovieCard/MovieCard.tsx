import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull } from "../../types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
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
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }

  if (movie) {
    return (
      <StyledMovieCard>
        <MoviePoster poster={movie.Poster}></MoviePoster>
      </StyledMovieCard>
    );
  } else return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
};
