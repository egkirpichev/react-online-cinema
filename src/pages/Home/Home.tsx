import { useMemo } from "react";
import { CustomSpinner } from "../../components/CustomSpinner";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRandomMovies } from "../../store/slices/movieSlice";
import { Color } from "../../ui";

export const Home = () => {
  const { movieList, requestParams, isLoading, error } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.movies
  );
  const dispatch = useAppDispatch();

  useMemo(() => {
    if (movieList.length === 0 && !isLoading) {
      dispatch(getRandomMovies());
    }
  }, []);

  if (isLoading) {
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (error) {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }

  return (
    <>
      <MovieList movieList={movieList} />
      {!isLoading && <Footer requestParams={requestParams} />}
    </>
  );
};
