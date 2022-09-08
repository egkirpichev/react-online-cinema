import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
  useDebounce,
  useInput,
} from "../../hooks";
import { resetSearch, searchMovies } from "../../store/slices/searchSlice";
import { StyledInput, StyledSearchBar } from "./styles";

export const SearchBar = () => {
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const searchInput = useInput();
  const searchRequest = useDebounce(searchInput.value, 1000);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchRequest) {
      dispatch(searchMovies(searchRequest));
    } else {
      dispatch(resetSearch());
    }
  }, [searchRequest]);

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
        type="text"
        placeholder="Search"
        {...searchInput}
      />
    </StyledSearchBar>
  );
};
