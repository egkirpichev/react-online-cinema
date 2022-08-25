import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull } from "../../types/types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
import { MovieListItem } from "../MovieListItem";
import { StyledMovieList } from "./styles";

export const MovieList = () => {
  const [movieList, setMovieList] = useState<IMovieFull[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getRandomMovies()
      .then((response) => {
        setMovieList(response.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  }, []);

  if (isLoading) {
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }

  return (
    <StyledMovieList>
      {movieList.map((movieListItem) => {
        return <MovieListItem movieListItem={movieListItem} />;
      })}
    </StyledMovieList>
  );
};
