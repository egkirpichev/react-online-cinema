import { ROUTE } from "../router";

export enum Param {
  ApiKey = "apikey",
  Id = "i",
  Title = "t",
  Type = "type",
  Year = "y",
  Plot = "plot",
  Search = "s",
  Page = "page",
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
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IMovieListItem {
  poster: string;
  title: string;
  genres: string[];
  rating: string;
  imdbID: string;
}

export interface IMovieRating {
  Source: string;
  Value: string;
}

export interface IMovieCard {
  title: string;
  year: string;
  released: string;
  runtime: string;
  genres: string[];
  director: string;
  writers: string;
  actors: string;
  plot: string;
  country: string;
  poster: string;
  imdbRating: string;
  imdbID: string;
  type: string;
  boxOffice: string;
  production: string;
}

export interface IMovieFactsList {
  Year: string;
  Released: string;
  BoxOffice: string;
  Country: string;
  Production: string;
  Actors: string;
  Director: string;
  Writers: string;
}

export type RouteType =
  | [ROUTE.HOME]
  | [ROUTE, { imdbID: string }]
  | [ROUTE.TRENDS]
  | [ROUTE.FAVOURITES]
  | [ROUTE.SETTINGS]
  | [ROUTE.SIGN_IN]
  | [ROUTE.SIGN_UP]
  | [ROUTE.RESET_PASSWORD];

export interface IRequestParams {
  apikey: string | undefined;
  s: string;
  page: string;
  y?: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}

export interface IUserSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export enum FirebaseErrorMessage {
  EMAIL_ALREADY_IN_USE = "The provided email is already in use by an existing user",
  USER_NOT_FOUND = "There is no existing user cooresponding to the provided email",
  UNKNOWN_ERROR = "Something went wrong, please try again",
  WRONG_PASSWORD = "Please, enter the correct password",
}

export interface ISettings {
  name: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  isLightMode: boolean;
}
