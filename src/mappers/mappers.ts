import { IMovieFull, IMovieListItem } from "../types";

export const getShortMovieDescription = ({
  Poster,
  Title,
  Genre,
  Ratings,
}: IMovieFull): IMovieListItem => {
  return {
    poster: Poster,
    title: Title,
    genre: Genre.split(", "),
    rating: Ratings.reduce((value, rating) => {
      return rating.Source === "Internet Movie Database"
        ? (value = rating.Value.replace("/10", "").padStart(3, ".0"))
        : value;
    }, ""),
  };
};
