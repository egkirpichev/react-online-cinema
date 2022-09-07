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
  movieListItem: IMovieShort;
}

export const MovieListItem = ({ movieListItem }: IProps) => {
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  console.log(movieListItem);

  return (
    <StyledMovieCard>
      <StyledLink
        to={createRoute(ROUTE.MOVIE, { imdbID: movieListItem.imdbID })}
      >
        <MoviePoster poster={movieListItem.Poster}></MoviePoster>
      </StyledLink>
      <Description>
        <MovieTitle
          $isLightMode={isLightMode}
          to={createRoute(ROUTE.MOVIE, { imdbID: movieListItem.imdbID })}
        >
          {movieListItem.Title}
        </MovieTitle>

        <Released
          $isLightMode={isLightMode}
        >{`Released: ${movieListItem.Year}`}</Released>
      </Description>
    </StyledMovieCard>
  );
};
