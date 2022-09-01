import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "../../router";
import { IUserSignIn } from "../../types/types";
import { Space } from "../../ui/theme";
import { ButtonPrimary } from "../../ui/typography";
import {
  Body,
  FieldTitle,
  InputField,
  StyledInput,
  ResetPassword,
  SignUp,
  SignUpLink,
  StyledForm,
  Title,
  Error,
} from "./styles";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignIn>();

  const onSubmit: SubmitHandler<IUserSignIn> = (data) => console.log(data);

  return (
    <StyledForm
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>Sign In</Title>
      <Body>
        <InputField>
          <FieldTitle>Email</FieldTitle>
          <StyledInput
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Please, enter account e-mail" })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputField>
        <InputField>
          <FieldTitle>Password</FieldTitle>
          <StyledInput
            type="password"
            placeholder="Your Password"
            {...register("password", {
              required: "Please, enter account password",
              minLength: {
                value: 5,
                message: "Password should be at leat 5 characters long",
              },
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}

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
