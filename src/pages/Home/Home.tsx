import { useMemo } from "react";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { SearchError } from "../../components/SearchError";
import { SearchSpinner } from "../../components/SearchSpinner";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getRandomMovies, resetSearch, searchMovies } from "../../store/slices/moviesSlice";

export const Home = () => {
  const { movieList, requestParams, searchResults, searchParams, isLoading, error, disableLoader } =
    useAppSelector(({ persistedReducer }) => persistedReducer.movies);

  const { searchRequest } = useAppSelector(({ persistedReducer }) => persistedReducer.search);
  const { y, type, s } = searchRequest;
  const dispatch = useAppDispatch();

  useMemo(() => {
    if (movieList.length === 0 && !isLoading) {
      dispatch(getRandomMovies());
    }
  }, [dispatch, isLoading, movieList.length]);

  useMemo(() => {
    if (s || type || y) {
      dispatch(searchMovies({ y, type, s }));
    } else if (!s) {
      dispatch(resetSearch());
    }
  }, [dispatch, s, type, y]);

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
        {!disableLoader && !isLoading && <Footer requestParams={searchParams} />}
      </>
    );
  } else {
    return (
      <>
        <MovieList movieList={movieList} />
        {!disableLoader && !isLoading && <Footer requestParams={requestParams} />}
      </>
    );
  }
};
