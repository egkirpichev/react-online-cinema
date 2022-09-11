import { OMDbApi } from "../services/OMDbApi";
import {
  FirebaseErrorMessage,
  IFilters,
  IMovieShort,
  RouteType,
} from "../types";
import { Color } from "../ui";

export const getRatingBadgeColor = (rating: string): Color => {
  if (Number(rating) <= 7) {
    return Color.Yellow;
  } else if (Number(rating) <= 4) {
    return Color.Orange;
  } else return Color.Green;
};

export const createRoute = (...args: RouteType) => {
  const [path, params] = args;

  if (typeof params === "undefined") return path;

  return Object.entries(params).reduce((prev: string, [param, value]) => {
    return prev.replace(`:${param}`, "" + value);
  }, path);
};

export const getShortUserName = (name: string): string => {
  return (name.charAt(0) + name.charAt(1)).toUpperCase();
};

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_ALREADY_IN_USE;
    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_NOT_FOUND;
    case "auth/wrong-password":
      return FirebaseErrorMessage.WRONG_PASSWORD;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};

export const checkIfInFavorites = (
  favorites: IMovieShort[],
  id: string
): boolean => {
  return favorites.reduce(
    (isInFavorites, favorite) =>
      favorite.imdbID === id ? !isInFavorites : isInFavorites,
    false
  );
};

export const checkIfInTrends = (trends: IMovieShort[], id: string): boolean => {
  return trends.reduce(
    (isInFavorites, trending) =>
      trending.imdbID === id ? !isInFavorites : isInFavorites,
    false
  );
};

export const getTrendingPageTitle = (trend: string): string => {
  switch (trend) {
    case "man":
      return "Action";
    case "star wars":
      return "Star Wars saga";
    case "love":
      return "Right in the feels";
    default:
      return "Currently trending";
  }
};

export const sortMovieList = (
  filters: IFilters,
  movieList: IMovieShort[]
): IMovieShort[] => {
  let sortedMovieList = [...movieList];

  if (filters.sortBy === "title") {
    sortedMovieList.sort((item, nextItem) =>
      item.Title.localeCompare(nextItem.Title)
    );
  } else if (filters.sortBy === "year") {
    sortedMovieList.sort(
      (item, nextItem) => +nextItem.Year.slice(0, 4) - +item.Year.slice(0, 4)
    );
  }

  if (filters.type) {
    sortedMovieList = [...sortedMovieList].filter(
      (item) => item.Type === filters.type
    );
  }

  if (filters.year) {
    sortedMovieList = [...sortedMovieList].filter(
      (item) => item.Year === filters.year
    );
  }
  return sortedMovieList;
};

export const getMovieRecommendation = (title: string): string => {
  const recommendation = title
    .toLowerCase()
    .match(/(?!(the|this|these|those|that|them))\b\w{3,10}\b/);

  if (recommendation) {
    return recommendation[0];
  } else return OMDbApi.trend;
};
