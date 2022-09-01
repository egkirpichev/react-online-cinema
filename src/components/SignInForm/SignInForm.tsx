import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "../../router";
import { ButtonPrimary } from "../../ui/typography";
import { ErrorMessage } from "../ErrorMessage";
import {
  Body,
  EmailInput,
  FieldTitle,
  InputField,
  PasswordInput,
  ResetPassword,
  SignUp,
  SignUpLink,
  StyledForm,
  Title,
  Error,
} from "./styles";

interface IUser {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => console.log(data);

  return (
    <StyledForm width={{ S: "574px" }} onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign In</Title>
      <Body>
        <InputField>
          <FieldTitle>Email</FieldTitle>
          <EmailInput
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <Error>Please, enter account e-mail</Error>
          )}
        </InputField>
        <InputField>
          <FieldTitle>Password</FieldTitle>
          <PasswordInput
            type="password"
            placeholder="Your Password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password?.type === "required" && (
            <Error>Please, enter account password</Error>
          )}
          {errors.password?.type === "minLength" && (
            <Error>Password should be at leat 5 characters long</Error>
          )}
          <ResetPassword to={`/${ROUTE.RESET_PASSWORD}`}>
            Forgot password?
          </ResetPassword>
        </InputField>
      </Body>
      <ButtonPrimary>Sign In</ButtonPrimary>
      <SignUp>
        Dont have and account?&nbsp;&nbsp;
        <SignUpLink to={`/${ROUTE.SIGN_UP}`}> Sign Up</SignUpLink>
      </SignUp>
    </StyledForm>
  );
};
