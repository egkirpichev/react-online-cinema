import { useMemo } from "react";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { SearchError } from "../../components/SearchError";
import { SearchSpinner } from "../../components/SearchSpinner";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRandomMovies } from "../../store/slices/movieSlice";

export const Home = () => {
  const { movieList, requestParams, isLoading, error, disableLoader } =
    useAppSelector(({ persistedReducer }) => persistedReducer.movies);
  const {
    searchResults,
    searchParams,
    pending,
    searchEerror,
    disableSearchLoader,
  } = useAppSelector(({ persistedReducer }) => persistedReducer.search);
  const dispatch = useAppDispatch();

  useMemo(() => {
    if (movieList.length === 0 && !isLoading) {
      dispatch(getRandomMovies());
    }
  }, [movieList, isLoading, dispatch]);

  if (isLoading || pending) {
    return <SearchSpinner />;
  }

  if (error || searchEerror) {
    return (
      <SearchError message={(error as string) || (searchEerror as string)} />
    );
  }

  if (searchResults && searchResults.length ^ 0) {
    return (
      <>
        <MovieList movieList={searchResults} />
        {!disableSearchLoader && !isLoading && (
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
