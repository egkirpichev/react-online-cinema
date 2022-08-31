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

interface IProps {
  movieListItem: IMovieShort;
}

export const MovieListItem = ({ movieListItem }: IProps) => {
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
          to={createRoute(ROUTE.MOVIE, { imdbID: movieListItem.imdbID })}
        >
          {movieListItem.Title}
        </MovieTitle>

        <Released>{`Released: ${movieListItem.Year}`}</Released>
      </Description>
    </StyledMovieCard>
  );
};
