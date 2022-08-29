import { Subtitle3 } from "../../ui/typography";
import { StyledInput, Wrapper } from "./styles";

interface IProps {
  title?: string;
  placeholder: string;
}

export const Input = ({ title, placeholder }: IProps) => {
  return (
    <Wrapper>
      {title && <Subtitle3>{title}</Subtitle3>}
      <StyledInput placeholder={placeholder} type="text" />
    </Wrapper>
  );
};
