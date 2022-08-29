import { StyledHeader } from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { SearchBar } from "../SearchBar";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
    </StyledHeader>
  );
};
