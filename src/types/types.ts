export enum Param {
  ApiKey = "apikey",
  Id = "i",
  Title = "t",
  Type = "type",
  Year = "y",
  Plot = "plot",
  Search = "s",
  Page = "p",
}

export interface IMovieFull {
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
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Response: string;
}

export interface IMovieShort {
  poster: string;
  title: string;
  type: string;
  year: string;
  imdbID: string;
}

export interface IMovieListItem {
  poster: string;
  title: string;
  genre: string[];
  rating: string;
}

export interface IMovieRating {
  Source: string;
  Value: string;
}
