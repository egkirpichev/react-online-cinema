import { BsFillShareFill, BsFillBookmarkFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { transformForFavorites } from "../../mappers/mappers";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/userSlice";
import { IMovieCard } from "../../types";
import { checkIfInFavorites } from "../../utils/utils";
import { Container, ControlButton } from "./styles";

interface IProps {
  movie: IMovieCard;
}

export const MovieControl = ({ movie }: IProps) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );
  const forFavourites = transformForFavorites(movie);
  const isInFavorites = checkIfInFavorites(favorites, movie.imdbID);

  return (
    <Container>
      {isInFavorites ? (
        <ControlButton
          isInFavorites
          onClick={() => {
            dispatch(removeFromFavorites(forFavourites));
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
