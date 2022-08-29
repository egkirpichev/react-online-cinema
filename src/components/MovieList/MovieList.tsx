import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort } from "../../types/types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
import { MovieListItem } from "../MovieListItem";
import { StyledMovieList } from "./styles";

export const MovieList = () => {
  const [movieList, setMovieList] = useState<IMovieShort[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getRandomMovies()
      .then((response) => {
        setMovieList(response);
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
    <StyledMovieList
      gridTemplateColumns={{
        default: "1fr",
        S: "repeat(3, 1fr)",
        XL: "repeat(4, 1fr)",
        XXL: "repeat(5, 1fr)",
      }}
    >
      {movieList.map((movieListItem) => {
        return <MovieListItem movieListItem={movieListItem} />;
      })}
    </StyledMovieList>
  );
};
