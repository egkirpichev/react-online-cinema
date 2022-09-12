import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRecommendations } from "../../store/slices/movieSlice";
import { MovieListItem } from "../MovieListItem";
import { SearchError } from "../SearchError";
import { SearchSpinner } from "../SearchSpinner";
import { Slider } from "./styles";
import { motion } from "framer-motion";

export const Recommendations = () => {
  const {
    recommendedMovies,
    areRecommendationsLoading,
    recommendationsError,
    recommendation,
  } = useAppSelector(({ persistedReducer }) => persistedReducer.movie);

  const dispatch = useAppDispatch();

  useMemo(() => {
    if (!areRecommendationsLoading)
      dispatch(getRecommendations(recommendation));
  }, [recommendation]);

  if (areRecommendationsLoading) {
    return <SearchSpinner />;
  }

  if (recommendationsError) {
    return <SearchError message={recommendationsError} />;
  }

  return (
    <Slider>
      {recommendedMovies.map((movieListItem) => {
        return (
          <MovieListItem key={movieListItem.imdbID} movie={movieListItem} />
        );
      })}
    </Slider>
  );
};
