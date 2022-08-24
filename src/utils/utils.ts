import { Color } from "../ui";

export const getRatingBadgeColor = (rating: number): Color => {
  if (Number(rating) <= 7) {
    return Color.Yellow;
  } else if (Number(rating) <= 4) {
    return Color.Orange;
  } else return Color.Green;
};
