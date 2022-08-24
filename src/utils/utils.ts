import { RouteType } from "../types/types";
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
