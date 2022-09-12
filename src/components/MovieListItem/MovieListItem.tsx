import { IMovieShort } from "../../types";
import {
  Description,
  MovieTitle,
  Released,
  StyledLink,
  StyledMovieCard,
} from "./styles";
import { MoviePoster } from "../MoviePoster";
import { createRoute } from "../../utils";
import { ROUTE } from "../../router";
import { useAppSelector } from "../../hooks";

interface IProps {
  movie: IMovieShort;
  to?: string;
}

export const MovieListItem = ({ movie, to }: IProps) => {
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  return (
    <StyledMovieCard>
      <StyledLink to={createRoute(ROUTE.MOVIE, { imdbID: movie.imdbID })}>
        <MoviePoster poster={movie.Poster} id={movie.imdbID}></MoviePoster>
      </StyledLink>
      <Description>
        <MovieTitle
          $isLightMode={isLightMode}
          to={createRoute(ROUTE.MOVIE, { imdbID: movie.imdbID })}
        >
          {movie.Title}
        </MovieTitle>

        <Released $isLightMode={isLightMode}>{`Released: ${movie.Year.slice(
          0,
          4
        )}`}</Released>
      </Description>
    </StyledMovieCard>
  );
};
