import { Input } from "../Input";
import { StyledSearchBar } from "./styles";

export const SearchBar = () => {
  return (
    <StyledSearchBar
      gridColumn={{
        S: "2/3",
      }}
    >
      <Input placeholder="Search" />
    </StyledSearchBar>
  );
};
