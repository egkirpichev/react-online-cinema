import { useMemo } from "react";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { SearchError } from "../../components/SearchError";
import { SearchSpinner } from "../../components/SearchSpinner";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getRandomMovies,
  resetSearch,
  searchMovies,
} from "../../store/slices/moviesSlice";

export const Home = () => {
  const {
    movieList,
    requestParams,
    searchResults,
    searchParams,
    isLoading,
    error,
    disableLoader,
  } = useAppSelector(({ persistedReducer }) => persistedReducer.movies);

  const { searchRequest } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.search
  );

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (movieList.length === 0 && !isLoading) {
      dispatch(getRandomMovies());
    } else if (searchRequest.s && !isLoading) {
      dispatch(searchMovies(searchRequest));
    } else if (!searchRequest.s && searchResults.length > 0) {
      dispatch(resetSearch());
    }
  }, [searchRequest]);

  if (isLoading) {
    return <SearchSpinner />;
  }

  if (error) {
    return <SearchError message={error as string} />;
  }

  if (searchRequest.s && searchResults.length > 0) {
    return (
      <>
        <MovieList movieList={searchResults} />
        {!disableLoader && !isLoading && (
          <Footer requestParams={searchParams} />
        )}
      </>
    );
  } else {
    return (
      <>
        <MovieList movieList={movieList} />
        {!disableLoader && !isLoading && (
          <Footer requestParams={requestParams} />
        )}
      </>
    );
  }
};
