import { Subtitle3 } from "../../ui/typography";
import { StyledInput, Wrapper } from "./styles";

export const Input = () => {
  return (
    <Wrapper>
      <Subtitle3>Title</Subtitle3>
      <StyledInput placeholder="Placeholder" type="text" />
    </Wrapper>
  );
};
