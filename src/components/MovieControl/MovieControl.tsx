import { BsFillShareFill, BsFillBookmarkFill } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getShortMovieDescription } from "../../mappers";
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
  const isInFavorites = checkIfInFavorites(favorites, forFavourites);

  return (
    <Container>
      {isInFavorites ? (
        <ControlButton
          isInFavorites
          onClick={() => {
            dispatch(removeFromFavorites(forFavourites));
          }}
        >
          <BsFillBookmarkFill />
        </ControlButton>
      ) : (
        <ControlButton
          onClick={() => {
            dispatch(addToFavorites(forFavourites));
          }}
        >
          <BsFillBookmarkFill />
        </ControlButton>
      )}

      <ControlButton>
        <BsFillShareFill />
      </ControlButton>
    </Container>
  );
};
