import { StyledInput, StyledSearchBar } from "./styles";

export const SearchBar = () => {
  return (
    <StyledSearchBar
      gridColumn={{
        S: "2/3",
      }}
      gridRow={{
        S: "1/2",
      }}
    >
      <StyledInput type="text" placeholder="Search" />
    </StyledSearchBar>
  );
};
