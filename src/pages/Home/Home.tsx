import { useMemo } from "react";
import { CustomSpinner } from "../../components/CustomSpinner";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRandomMovies } from "../../store/slices/movieSlice";
import { Color } from "../../ui";

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
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (error || searchEerror) {
    return (
      <ErrorMessage message={(error as string) || (searchEerror as string)} />
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
