import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { OMDbApi } from "../../services/OMDbApi";
import { IMovieShort, IRequestParams } from "../../types/types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { LoadMore, StyledFooter, Text } from "./styles";

interface IProps {
  initialParams: IRequestParams;
  setInitialParams: Dispatch<SetStateAction<IRequestParams>>;
  setMovieList: Dispatch<SetStateAction<IMovieShort[]>>;
}

export const Footer = ({
  initialParams,
  setInitialParams,
  setMovieList,
}: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    isLoading &&
      OMDbApi.loadMoreMovies(initialParams).then(
        ({ Search, params, config }) => {
          setIsLoading(false);
          setInitialParams(params);
          setMovieList((movieList) => [...movieList, ...Search]);
        }
      );
  }, [isLoading]);

  return (
    <StyledFooter gridColumn={{ XL: "2/3" }}>
      <LoadMore type="button" onClick={handleClick}>
        <Text>Load More</Text>
        {isLoading && (
          <CustomSpinner color={Color.White} still={false} size="20px" />
        )}
      </LoadMore>
    </StyledFooter>
  );
};
