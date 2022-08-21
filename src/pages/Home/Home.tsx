import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList";
import { NavBar } from "../../components/NavBar";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovie } from "../../types/types";

export const Home = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    OMDbApi.getRandomMovies().then((response) => setMovies(response.Search));
  }, []);

  return (
    <>
      <NavBar />
      <MovieList movies={movies} />
    </>
  );
};
