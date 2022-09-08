import { useMemo } from "react";
import { CustomSpinner } from "../../components/CustomSpinner";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Footer } from "../../components/Footer";
import { MovieList } from "../../components/MovieList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getTrends } from "../../store/slices/trendsSlice";
import { Color } from "../../ui";
import { TrendingMovieList, TrendingPageTitle } from "./styles";

export const Trends = () => {
  const { movieList, requestParams, isLoading, error, disableLoader, trend } =
    useAppSelector(({ persistedReducer }) => persistedReducer.trends);

  const {
    searchResults,
    searchParams,
    pending,
    searchEerror,
    disableSearchLoader,
  } = useAppSelector(({ persistedReducer }) => persistedReducer.search);

  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (movieList.length === 0 && !isLoading) {
      dispatch(getTrends());
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
        <TrendingMovieList>
          <TrendingPageTitle textAlign={{ XL: "left" }}>
            {trend}
          </TrendingPageTitle>
          <MovieList movieList={searchResults} />
        </TrendingMovieList>
        {!disableSearchLoader && !isLoading && (
          <Footer requestParams={searchParams} />
        )}
      </>
    );
  } else {
    return (
      <>
        <TrendingMovieList>
          <TrendingPageTitle $isLightMode textAlign={{ XL: "left" }}>
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
