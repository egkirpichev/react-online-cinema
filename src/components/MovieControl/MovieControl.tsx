import { BsFillShareFill, BsFillBookmarkFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector, addToFavorites, removeFromFavorites } from "store";
import { IMovieCard } from "types";
import { Container, ControlButton } from "./styles";
import { checkIfInFavorites } from "utils";
import { transformForFavorites } from "mappers";

interface IProps {
  movie: IMovieCard;
}

export const MovieControl = ({ movie }: IProps) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(({ persistedReducer }) => persistedReducer.user);
  const forFavourites = transformForFavorites(movie);
  const isInFavorites = checkIfInFavorites(favorites, movie.imdbID);

  return (
    <Container>
      {isInFavorites ? (
        <ControlButton
          isInFavorites
          onClick={() => {
            dispatch(removeFromFavorites(movie.imdbID));
          }}
        >
          <BsFillBookmarkFill size={20} />
        </ControlButton>
      ) : (
        <ControlButton
          onClick={() => {
            dispatch(addToFavorites(forFavourites));
          }}
        >
          <BsFillBookmarkFill size={20} />
        </ControlButton>
      )}

      <ControlButton>
        <BsFillShareFill size={20} />
      </ControlButton>
    </Container>
  );
};
