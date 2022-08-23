import { IMovieFull, IMovieListItem } from "../../types";

export const getShortMovieDescription = ({
  Poster,
  Title,
  Genre,
  Ratings,
}: IMovieFull): IMovieListItem => {
  return {
    poster: Poster,
    title: Title,
    genre: Genre,
    rating: Ratings.reduce((value, rating) => {
      return rating.Source === "Rotten Tomatoes"
        ? (value = rating.Value)
        : value;
    }, ""),
  };
};
