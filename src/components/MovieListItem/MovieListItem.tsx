import { IMovieShort } from "types";
import { Description, MovieTitle, Released, StyledMovieCard } from "./styles";
import { MoviePoster } from "components";
import { ROUTE } from "router";
import { useAppSelector } from "store";
import { generatePath } from "react-router-dom";

interface IProps {
  movie: IMovieShort;
  to?: string;
}

export const MovieListItem = ({ movie }: IProps) => {
  const { isLightMode } = useAppSelector(({ persistedReducer }) => persistedReducer.user);

  return (
    <StyledMovieCard>
      <MoviePoster poster={movie.Poster} id={movie.imdbID}></MoviePoster>
      <Description>
        <MovieTitle
          $isLightMode={isLightMode}
          to={generatePath(`/${ROUTE.MOVIE}`, { imdbID: movie.imdbID })}
        >
          {movie.Title}
        </MovieTitle>

        <Released $isLightMode={isLightMode}>{`Released: ${movie.Year.slice(0, 4)}`}</Released>
      </Description>
    </StyledMovieCard>
  );
};
