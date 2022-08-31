import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull, IMovieListItem, IMovieShort } from "../../types";
import { Color } from "../../ui";
import { getShortMovieDescription } from "../../mappers";
import { RatingBadge } from "../RatingBadge";
import {
  Description,
  MovieTitle,
  Released,
  StyledLink,
  StyledMovieCard,
} from "./styles";
import { MovieGenre } from "../MovieGenre";
import { MoviePoster } from "../MoviePoster";
import { Link } from "react-router-dom";
import { createRoute } from "../../utils";
import { Endpoint } from "../../router";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";

interface IProps {
  movieListItem: IMovieShort;
}

export const MovieListItem = ({ movieListItem }: IProps) => {
  console.log(movieListItem);

  return (
    <StyledMovieCard>
      <StyledLink
        to={createRoute(Endpoint.MOVIE, { imdbID: movieListItem.imdbID })}
      >
        <MoviePoster poster={movieListItem.Poster}></MoviePoster>
      </StyledLink>
      <Description>
        <MovieTitle
          to={createRoute(Endpoint.MOVIE, { imdbID: movieListItem.imdbID })}
        >
          {movieListItem.Title}
        </MovieTitle>

        <Released>{`Released: ${movieListItem.Year}`}</Released>
      </Description>
    </StyledMovieCard>
  );
};
