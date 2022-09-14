import { useEffect } from "react";
import { useAppDispatch, useAppSelector, useDebounce, useInput } from "../../hooks";
import { setSearchRequest } from "../../store/slices/searchSlice";
import { SearchFilters } from "../SearchFilters";
import { StyledInput, StyledSearchBar } from "./styles";

export const SearchBar = () => {
  const { isLightMode } = useAppSelector(({ persistedReducer }) => persistedReducer.user);
  const searchInput = useInput();
  const searchRequestValue = useDebounce(searchInput.value, 1000);
  const dispatch = useAppDispatch();

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
      <StyledInput $isLightMode={isLightMode} type="text" placeholder="Search" {...searchInput} />
      <SearchFilters />
    </StyledSearchBar>
  );
};
