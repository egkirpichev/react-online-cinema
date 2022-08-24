import { StyledBadge } from "./styles";

interface IProps {
  rating: any;
}

export const RatingBadge = ({ rating }: IProps) => {
  return <StyledBadge rating={rating}>{rating}</StyledBadge>;
};
