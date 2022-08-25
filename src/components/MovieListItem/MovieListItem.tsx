import { useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieFull, IMovieListItem, IMovieShort } from "../../types";
import { Color } from "../../ui";
import { getShortMovieDescription } from "../../mappers";
import { RatingBadge } from "../RatingBadge";
import { Description, MovieTitle, StyledMovieCard } from "./styles";
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
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }

  if (movie) {
    return (
      <StyledMovieCard>
        <Link to={createRoute(Endpoint.MOVIE, { imdbID: movie.imdbID })}>
          <MoviePoster poster={movie.poster}>
            <RatingBadge rating={movie.rating} />
          </MoviePoster>
        </Link>
        <Description>
          <MovieTitle
            to={createRoute(Endpoint.MOVIE, { imdbID: movie.imdbID })}
          >
            {movie.title}
          </MovieTitle>

          <MovieGenre genres={movie.genres} />
        </Description>
      </StyledMovieCard>
    );
  } else {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }
};
