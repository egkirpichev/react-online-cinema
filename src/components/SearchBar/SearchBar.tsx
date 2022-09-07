import { useAppSelector } from "../../hooks";
import { StyledInput, StyledSearchBar } from "./styles";

export const SearchBar = () => {
  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

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
      />
    </StyledSearchBar>
  );
};
