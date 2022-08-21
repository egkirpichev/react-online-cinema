export type MovieRequestParams =
  | "?i"
  | "?t"
  | "type"
  | "y"
  | "plot"
  | "s"
  | "page";

export interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IMovieRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbId: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Response: string;
}

interface IMovieRating {
  Source: string;
  Value: string;
}
