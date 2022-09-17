import { IMovieShort } from "../../types";
import { Description, MovieTitle, Released, StyledLink, StyledMovieCard } from "./styles";
import { MoviePoster } from "../MoviePoster";
import { ROUTE } from "../../router";
import { useAppSelector } from "store/hooks";
import { generatePath } from "react-router-dom";

interface IProps {
  movie: IMovieShort;
  to?: string;
}

export const MovieListItem = ({ movie, to }: IProps) => {
  const { isLightMode } = useAppSelector(({ persistedReducer }) => persistedReducer.user);

  return (
    <StyledMovieCard>
      <StyledLink to={generatePath(`/${ROUTE.MOVIE}`, { imdbID: movie.imdbID })}>
        <MoviePoster poster={movie.Poster} id={movie.imdbID}></MoviePoster>
      </StyledLink>
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
