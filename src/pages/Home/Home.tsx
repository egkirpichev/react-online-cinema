import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList";
import { NavBar } from "../../components/NavBar";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovie } from "../../types/types";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getRandomMovies()
      .then((response) => {
        setMovies(response.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  }, []);

  return (
    <>
      <NavBar />
      <MovieList
        movies={movies}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </>
  );
};
