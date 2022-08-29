import { StyledHeader } from "./styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { SearchBar } from "../SearchBar";
import { Space } from "../../ui/theme";

export const Header = () => {
  return (
    <StyledHeader
      gridTemplateColumns={{
        S: "25% auto 8%",
        XL: "21% auto 17%",
        XXL: "15% auto 15%",
      }}
      gridColumn={{
        XL: "1/3",
      }}
      gridGap={{
        S: `${Space.M}`,
        XL: `${Space.L}`,
      }}
    >
      <Logo />
      <SearchBar />
    </StyledHeader>
  );
};
