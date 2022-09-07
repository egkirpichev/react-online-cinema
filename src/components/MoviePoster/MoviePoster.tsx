import { useAppSelector } from "../../hooks";
import { checkIfInFavorites } from "../../utils";
import { FavoriteBadge } from "../FavoriteBadge";
import { Poster, StyledMoviePoster } from "./styles";

interface IProps {
  poster: string;
  id: string;
}

export const MoviePoster = ({ poster, id }: IProps) => {
  const { favorites } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );
  const isInFavorites = checkIfInFavorites(favorites, id);

  return (
    <Poster>
      {isInFavorites && <FavoriteBadge />}
      <StyledMoviePoster maxHeight={{ S: "279px", XL: "357px" }} src={poster} />
    </Poster>
  );
};
