import { useMemo } from "react";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecommendations } from "../../store/slices/movieSlice";
import { MovieListItem } from "../MovieListItem";
import { SearchError } from "../SearchError";
import { SearchSpinner } from "../SearchSpinner";

export const Recommendations = () => {
  const {
    recommendedMovies,
    areRecommendationsLoading,
    recommendationsError,
    recommendation,
  } = useAppSelector(({ persistedReducer }) => persistedReducer.movie);

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (recommendedMovies.length === 0 && !areRecommendationsLoading)
      dispatch(getRecommendations(recommendation));
  }, []);

  const settings = {
    adaptiveHeight: true,
    variableWidth: true,
  };

  if (areRecommendationsLoading) {
    return <SearchSpinner />;
  }

  if (recommendationsError) {
    return <SearchError message={recommendationsError} />;
  }

  return (
    <Slider {...settings}>
      {recommendedMovies.map((movieListItem) => {
        return (
          <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
        );
      })}
    </Slider>
  );
};
