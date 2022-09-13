import { ImdbIcon } from "../../assets";
import { useAppSelector } from "../../hooks";
import { IMovieCard, IMovieFactsList } from "../../types";
import { MovieControl } from "../MovieControl";
import { MovieFactsList } from "../MovieFactsList";
import { MovieGenre } from "../MovieGenre";
import { MoviePoster } from "../MoviePoster";
import { RatingBadge } from "../RatingBadge";
import {
  Plot,
  Control,
  Description,
  Header,
  StyledMovieCard,
  Title,
  Stats,
  StatsBadge,
} from "./styles";

interface IProps {
  movie: IMovieCard;
  movieFactsList: IMovieFactsList;
}

export const MovieCard = ({ movie, movieFactsList }: IProps) => {
  const { isLightMode } = useAppSelector(({ persistedReducer }) => persistedReducer.user);
  return (
    <StyledMovieCard gridTemplateColumns={{ S: "1fr 2fr", XL: "20% 80%" }}>
      <Control>
        <MoviePoster poster={movie.poster} id={movie.imdbID} />
        <MovieControl movie={movie} />
      </Control>
      <Description maxWidth={{ S: "80%" }}>
        <Header>
          <MovieGenre genres={movie.genres} />
          <Title $isLightMode={isLightMode}>{movie.title}</Title>
          <Stats>
            <RatingBadge rating={movie.imdbRating} />
            <StatsBadge>
              <ImdbIcon />
              {"  "}
              {movie.imdbRating}
            </StatsBadge>
            <StatsBadge>{movie.runtime}</StatsBadge>
          </Stats>
        </Header>
        <Plot $isLightMode={isLightMode}>{movie.plot}</Plot>
        <MovieFactsList $isLightMode={isLightMode} movieFactsList={movieFactsList} />
      </Description>
    </StyledMovieCard>
  );
};
