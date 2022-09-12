import { StyledBadge } from "./styles";
import { BsFillBookmarkFill } from "react-icons/bs";

export const FavoriteBadge = () => {
  return (
    <StyledBadge>
      <BsFillBookmarkFill size={20} />
    </StyledBadge>
  );
};
