import { StyledInput, Title, Wrapper } from "./styles";

interface IProps {
  title?: string;
  placeholder: string;
}

export const Input = ({ title, placeholder }: IProps) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <StyledInput placeholder={placeholder} type="text" />
    </Wrapper>
  );
};
