import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort } from "../../types/types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
import { MovieListItem } from "../MovieListItem";
import { StyledMovieList } from "./styles";

interface IProps {
  movieList: IMovieShort[];
}

export const MovieList = ({ movieList }: IProps) => {
  return (
    <StyledMovieList
      gridTemplateColumns={{
        default: "1fr",
        S: "repeat(3, 1fr)",
        XL: "repeat(4, 1fr)",
        XXL: "repeat(5, 1fr)",
      }}
    >
      {movieList.map((movieListItem) => {
        return (
          <MovieListItem
            key={movieListItem.imdbID}
            movieListItem={movieListItem}
          />
        );
      })}
    </StyledMovieList>
  );
};
