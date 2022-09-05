import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector, useToggle } from "../../hooks";
import { OMDbApi } from "../../services/OMDbApi";
import { loadMoreMovies } from "../../store/slices/movieSlice";
import { IMovieShort, IRequestParams } from "../../types/types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { LoadMore, StyledFooter, Text } from "./styles";

export const Footer = () => {
  const { initialParams } = useAppSelector((movieSlice) => movieSlice.movies);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useToggle();

  const handleClick = async () => {
    setIsLoading();
    await dispatch(loadMoreMovies(initialParams)).then(() => setIsLoading());
  };

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
