import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCardInfo, getMovieFacts } from "../../mappers/mappers";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieCard, IMovieFactsList } from "../../types/types";
import { Color } from "../../ui";
import { ReactComponent as ImdbIcon } from "../../assets/imdb-icon.svg";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
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
import { useAppSelector } from "../../hooks";

export const MovieCard = () => {
  const [movie, setMovie] = useState<IMovieCard>();
  const [movieFactsList, setMovieFactsList] = useState<IMovieFactsList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );
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
          <MovieFactsList
            $isLightMode={isLightMode}
            movieFactsList={movieFactsList}
          />
        </Description>
      </StyledMovieCard>
    );
  } else return <ErrorMessage message={"Something went wrong, try again 🍿"} />;
};
