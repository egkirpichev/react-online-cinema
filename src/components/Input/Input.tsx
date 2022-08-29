import { Subtitle3 } from "../../ui/typography";
import { StyledInput, Wrapper } from "./styles";

interface IProps {
  title?: string;
}

export const Input = ({ title }: IProps) => {
  return (
    <Wrapper>
      {title && <Subtitle3>{title}</Subtitle3>}
      <StyledInput placeholder="Placeholder" type="text" />
    </Wrapper>
  );
};
