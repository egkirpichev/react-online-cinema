import { StyledBadge } from "./styles";
import { BsFillBookmarkFill } from "react-icons/bs";
import { removeFromFavorites, useAppDispatch } from "store";

interface IProps {
  id: string;
}

export const FavoriteBadge = ({ id }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledBadge
      onClick={() => {
        dispatch(removeFromFavorites(id));
      }}
    >
      <BsFillBookmarkFill size={20} />
    </StyledBadge>
  );
};
