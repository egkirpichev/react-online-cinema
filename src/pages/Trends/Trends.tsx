import { useMemo } from "react";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { SearchError } from "../../components/SearchError";
import { SearchSpinner } from "../../components/SearchSpinner";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getTrends,
  resetSearch,
  searchTrends,
} from "../../store/slices/trendsSlice";
import { TrendingMovieList, TrendingPageTitle } from "./styles";

export const Trends = () => {
  const {
    movieList,
    requestParams,
    searchResults,
    searchParams,
    isLoading,
    error,
    disableLoader,
    trend,
  } = useAppSelector(({ persistedReducer }) => persistedReducer.trends);

  const { searchRequest } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.search
  );

  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (movieList.length === 0 && !isLoading) {
      dispatch(getTrends());
    } else if (searchRequest && !isLoading) {
      dispatch(searchTrends(searchRequest));
    } else if (!searchRequest && searchResults.length > 0) {
      dispatch(resetSearch());
    }
  }, [searchRequest]);

  if (isLoading) {
    return <SearchSpinner />;
  }

  if (error) {
    return <SearchError message={error as string} />;
  }
  if (searchRequest && searchResults.length ^ 0) {
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
        <TrendingMovieList>
          <TrendingPageTitle
            $isLightMode={isLightMode}
            textAlign={{ XL: "left" }}
          >
            {trend}
          </TrendingPageTitle>
          <MovieList movieList={movieList} />
        </TrendingMovieList>
        {!disableLoader && !isLoading && (
          <Footer requestParams={requestParams} />
        )}
      </>
    );
  }
};
