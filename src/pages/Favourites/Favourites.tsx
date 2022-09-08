import { MovieList } from "../../components/MovieList";
import { useAppSelector } from "../../hooks";
import { EmptyPage, Message } from "./styles";
import { ReactComponent as NoFavourites } from "../../assets/no-favourites.svg";

export const Favourites = () => {
  const { favorites } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  if (favorites.length === 0) {
    return (
      <EmptyPage maxWidth={{ XL: "80%" }}>
        <NoFavourites width={"100%"} />
        <Message>Nothing is here yet</Message>
      </EmptyPage>
    );
  }

  return <MovieList movieList={favorites} />;
};
