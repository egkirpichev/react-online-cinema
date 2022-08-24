import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull, IMovieListItem } from "../../types";
import { Color } from "../../ui";
import { getShortMovieDescription } from "../../mappers";
import { RatingBadge } from "../RatingBadge";
import {
  Description,
  ErrorMessage,
  MovieTitle,
  Poster,
  Spinner,
  StyledMovieCard,
} from "./styles";
import { MovieGenre } from "../MovieGenre";

interface IProps {
  movieListItem: IMovieFull;
}

export const MovieListItem = ({ movieListItem }: IProps) => {
  const [movie, setMovie] = useState<IMovieListItem>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    OMDbApi.getMovieById(movieListItem.imdbID)
      .then((response) => {
        const movieListItem = getShortMovieDescription(response);
        setMovie(movieListItem);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  }, []);

  if (isLoading) {
    return <Spinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage>Something went wrong 🎞</ErrorMessage>;
  }

  if (movie) {
    return (
      <StyledMovieCard>
        <Poster poster={movie.poster}>
          <RatingBadge rating={movie.rating} />
        </Poster>
        <Description>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieGenre genres={movie.genres} />
        </Description>
      </StyledMovieCard>
    );
  } else {
    return <ErrorMessage>Something went wrong 🎞</ErrorMessage>;
  }
};
