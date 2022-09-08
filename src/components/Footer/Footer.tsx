import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector, useToggle } from "../../hooks";
import { ROUTE } from "../../router";
import { loadMoreMovies } from "../../store/slices/movieSlice";
import { loadMoreSearchResults } from "../../store/slices/searchSlice";
import { loadMoreTrends } from "../../store/slices/trendsSlice";
import { IRequestParams } from "../../types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { LoadMore, StyledFooter, Text } from "./styles";

interface IProps {
  requestParams: IRequestParams;
}

export const Footer = ({ requestParams }: IProps) => {
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const { searchParams } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.search
  );

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useToggle();

  const { pathname } = useLocation();
  console.log(pathname);

  const handleClick = async () => {
    setIsLoading();

    if (searchParams.s) {
      return await dispatch(loadMoreSearchResults(searchParams)).then(() =>
        setIsLoading()
      );
    } else if (pathname === ROUTE.HOME) {
      return await dispatch(loadMoreMovies(requestParams)).then(() =>
        setIsLoading()
      );
    } else if (pathname === `/${ROUTE.TRENDS}`) {
      return await dispatch(loadMoreTrends(requestParams)).then(() =>
        setIsLoading()
      );
    }
  };

  return (
    <StyledFooter gridColumn={{ XL: "2/3" }}>
      <LoadMore type="button" onClick={handleClick} $isLightMode={isLightMode}>
        <Text>Load More</Text>
        {isLoading && (
          <CustomSpinner color={Color.White} still={false} size="20px" />
        )}
      </LoadMore>
    </StyledFooter>
  );
};
