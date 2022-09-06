import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { justifyItems } from "styled-system";
import { getMovieCardInfo, getMovieFacts } from "../../mappers/mappers";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieCard, IMovieFactsList } from "../../types/types";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
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
} from "./styles";

export const MovieCard = () => {
  const [movie, setMovie] = useState<IMovieCard>();
  const [movieFactsList, setMovieFactsList] = useState<IMovieFactsList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { imdbID } = useParams();

  useEffect(() => {
    if (imdbID)
      OMDbApi.getMovieById(imdbID)
        .then((movie) => {
          const movieCard = getMovieCardInfo(movie);
          const movieFactsList = getMovieFacts(movieCard);
          setMovie(movieCard);
          setMovieFactsList(movieFactsList);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setErrorMessage(error.message);
        });
  }, [imdbID]);

  if (isLoading) {
    return <CustomSpinner color={Color.PrimaryDark} />;
  }

  if (errorMessage) {
    return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
  }

  if (movie && movieFactsList) {
    return (
      <StyledMovieCard
        gridTemplateColumns={{ S: "1fr 2fr", L: "1fr 3fr" }}
        justifyItems={{ XL: "start" }}
      >
        <Control>
          <MoviePoster poster={movie.poster}></MoviePoster>
        </Control>
        <Description>
          <Header>
            <MovieGenre genres={movie.genres} />
            <Title>{movie.title}</Title>
            <RatingBadge rating={movie.imdbRating} />
          </Header>
          <Plot>{movie.plot}</Plot>
          <MovieFactsList movieFactsList={movieFactsList} />
        </Description>
      </StyledMovieCard>
    );
  } else return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
};
