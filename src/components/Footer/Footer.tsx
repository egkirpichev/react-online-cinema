import { useAppDispatch, useAppSelector, useToggle } from "../../hooks";
import { loadMoreMovies } from "../../store/slices/movieSlice";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { LoadMore, StyledFooter, Text } from "./styles";

export const Footer = () => {
  const { initialParams } = useAppSelector((movieSlice) => movieSlice.movies);
  const { isLightMode } = useAppSelector((userSlice) => userSlice.user);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useToggle();

  const handleClick = async () => {
    setIsLoading();
    await dispatch(loadMoreMovies(initialParams)).then(() => setIsLoading());
  };

  return (
    <StyledFooter gridColumn={{ XL: "2/3" }}>
      <LoadMore type="button" onClick={handleClick} isLightMode={isLightMode}>
        <Text>Load More</Text>
        {isLoading && (
          <CustomSpinner color={Color.White} still={false} size="20px" />
        )}
      </LoadMore>
    </StyledFooter>
  );
};
