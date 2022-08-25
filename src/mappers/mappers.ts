import { IMovieFull, IMovieListItem } from "../types";
import { IMovieCard, IMovieFactsList } from "../types/types";

export const getShortMovieDescription = ({
  Poster,
  Title,
  Genre,
  imdbRating,
  imdbID,
}: IMovieFull): IMovieListItem => {
  return {
    poster: Poster,
    title: Title,
    genres: Genre.split(", "),
    rating: imdbRating,
    imdbID: imdbID,
  };
};

export const getMovieCardInfo = ({
  Title,
  Year,
  Released,
  Runtime,
  Genre,
  Director,
  Writer,
  Actors,
  Plot,
  Country,
  Poster,
  imdbRating,
  imdbID,
  Type,
  BoxOffice,
  Production,
}: IMovieFull): IMovieCard => {
  return {
    title: Title,
    year: Year,
    released: Released,
    runtime: Runtime,
    genres: Genre.split(", "),
    director: Director,
    writers: Writer,
    actors: Actors,
    plot: Plot,
    country: Country,
    poster: Poster,
    imdbRating: imdbRating,
    imdbID: imdbID,
    type: Type,
    boxOffice: BoxOffice,
    production: Production,
  };
};

export const getMovieFacts = ({
  year,
  released,
  boxOffice,
  country,
  production,
  actors,
  director,
  writers,
}: IMovieCard): IMovieFactsList => {
  return {
    Year: year,
    Released: released,
    BoxOffice: boxOffice,
    Country: country,
    Production: production,
    Actors: actors,
    Director: director,
    Writers: writers,
  };
};
