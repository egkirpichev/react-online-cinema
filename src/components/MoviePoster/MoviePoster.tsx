import { useAppSelector } from "../../hooks";
import { checkIfInFavorites } from "../../utils";
import { FavoriteBadge } from "../FavoriteBadge";
import { TrendingBadge } from "../TrendingBadge";
import { Badges, Poster, StyledMoviePoster } from "./styles";
import posterSubstitute from "../../assets/no-poster.png";

interface IProps {
  poster: string;
  id: string;
}

export const MoviePoster = ({ poster, id }: IProps) => {
  const { favorites } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );
  const { movieList } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.trends
  );
  const isInFavorites = checkIfInFavorites(favorites, id);
  const isInTrends = checkIfInFavorites(movieList, id);

  return (
    <Poster>
      <Badges>
        {isInFavorites && <FavoriteBadge />}
        {isInTrends && <TrendingBadge />}
      </Badges>

      <StyledMoviePoster
        maxHeight={{ S: "279px", XL: "357px" }}
        src={poster === "N/A" ? posterSubstitute : poster}
      />
    </Poster>
  );
};
