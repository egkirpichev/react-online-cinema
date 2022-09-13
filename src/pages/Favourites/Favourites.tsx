import { MovieList } from "../../components/MovieList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { EmptyPage, Message } from "./styles";
import { NoFavorites } from "../../assets";
import { useEffect } from "react";
import { searchInFavourites } from "../../store/slices/userSlice";

export const Favourites = () => {
  const { favorites, searchResults } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user,
  );

  const { searchRequest } = useAppSelector(({ persistedReducer }) => persistedReducer.search);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchRequest) {
      dispatch(searchInFavourites(searchRequest));
    }
  }, [searchRequest]);

  if (favorites.length === 0) {
    return (
      <EmptyPage maxWidth={{ XL: "80%" }}>
        <NoFavorites width={"100%"} />
        <Message>Nothing is here yet</Message>
      </EmptyPage>
    );
  }

  if (searchRequest) {
    return <MovieList movieList={searchResults} />;
  }

  return <MovieList movieList={favorites} />;
};
