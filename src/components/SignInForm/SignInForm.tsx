import { ButtonPrimary } from "../../ui/typography";
import { Input } from "../Input";
import { StyledForm, Title } from "./styles";

export const SignInForm = () => {
  return (
    <StyledForm>
      <Title>Sign In</Title>
      <Input placeholder="Your Email" title="Email" />
      <Input placeholder="Your Password" title="Password" />
      <ButtonPrimary>Sign In</ButtonPrimary>
    </StyledForm>
  );
};
