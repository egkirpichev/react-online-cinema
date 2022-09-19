import { checkIfInFavorites } from "utils";
import { FavoriteBadge, TrendingBadge } from "components";
import { Badges, Poster, StyledMoviePoster } from "./styles";
import { noPoster } from "assets";
import { useAppSelector } from "store";

interface IProps {
  poster: string;
  id: string;
}

export const MoviePoster = ({ poster, id }: IProps) => {
  const { favorites } = useAppSelector(({ persistedReducer }) => persistedReducer.user);
  const { movieList } = useAppSelector(({ persistedReducer }) => persistedReducer.trends);
  const isInFavorites = checkIfInFavorites(favorites, id);
  const isInTrends = checkIfInFavorites(movieList, id);

  return (
    <Poster>
      <Badges>
        {isInFavorites && <FavoriteBadge id={id} />}
        {isInTrends && <TrendingBadge />}
      </Badges>

      <StyledMoviePoster
        maxHeight={{ S: "279px", XL: "357px" }}
        src={poster === "N/A" ? noPoster : poster}
      />
    </Poster>
  );
};
