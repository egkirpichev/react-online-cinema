import { Footer, MovieList, SearchError, SearchSpinner } from "components";
import { useMemo } from "react";
import {
  useAppDispatch,
  useAppSelector,
  getRandomMovies,
  resetMoviesSearch,
  searchMovies,
} from "store";

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
      dispatch(resetMoviesSearch());
    }
  }, [dispatch, s, type, y]);

  const enableSearchPagination = !disableLoader && !isLoading && searchResults.length > 0;

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
        {enableSearchPagination && <Footer requestParams={searchParams} />}
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
