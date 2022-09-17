import { useEffect } from "react";
import { useDebounce, useInput } from "../../hooks";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setSearchRequest } from "../../store/slices/searchSlice";
import { SearchFilters } from "../SearchFilters";
import { StyledInput, StyledSearchBar } from "./styles";

export const SearchBar = () => {
  const { isLightMode } = useAppSelector(({ persistedReducer }) => persistedReducer.user);
  const movies = useAppSelector(({ persistedReducer }) => persistedReducer.movies);
  const trends = useAppSelector(({ persistedReducer }) => persistedReducer.trends);
  const searchInput = useInput();
  const searchRequestValue = useDebounce(searchInput.value, 1000);
  const dispatch = useAppDispatch();

  const isError = !!movies.error || !!trends.error;

  useEffect(() => {
    dispatch(setSearchRequest(searchRequestValue));
  }, [dispatch, searchRequestValue]);

  return (
    <StyledSearchBar
      gridColumn={{
        S: "2/3",
      }}
      gridRow={{
        S: "1/2",
      }}
    >
      <StyledInput
        $isLightMode={isLightMode}
        $isError={isError}
        type="text"
        placeholder="Search"
        {...searchInput}
      />
      <SearchFilters />
    </StyledSearchBar>
  );
};
