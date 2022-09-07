import { MovieList } from "../../components/MovieList";
import { useAppSelector } from "../../hooks";

export const Favourites = () => {
  const { favorites } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  return <MovieList movieList={favorites} />;
};
