import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { ROUTE } from "../../router";
import { signUp } from "../../store/slices/userSlice";
import { IUserSignUp } from "../../types/types";
import { Space } from "../../ui/theme";
import { ButtonPrimary } from "../../ui/typography";
import {
  Body,
  FieldTitle,
  InputField,
  StyledForm,
  Title,
  Error,
  StyledInput,
  SignIn,
  SignInLink,
} from "./styles";

export const SignUpForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignUp>();

  const passwordValue = watch("password", "");

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IUserSignUp> = (data) => dispatch(signUp(data));

  return (
    <StyledForm
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>Sign Up</Title>
      <Body>
        <InputField>
          <FieldTitle>Name</FieldTitle>
          <StyledInput
            type="text"
            placeholder="Your name"
            {...register("name", { required: "Please, enter your name" })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </InputField>
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
                value: 6,
                message: "Password should be at leat 6 characters long",
              },
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </InputField>
        <InputField>
          <FieldTitle>Password</FieldTitle>
          <StyledInput
            type="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please, confrim the password",
              validate: (value) =>
                value === passwordValue || "Entered passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <Error>{errors.confirmPassword.message}</Error>
          )}
        </InputField>
      </Body>
      <ButtonPrimary>Sign Up</ButtonPrimary>
      <SignIn>
        Already have an account?&nbsp;&nbsp;
        <SignInLink to={`/${ROUTE.SIGN_IN}`}>Sign In</SignInLink>
      </SignIn>
    </StyledForm>
  );
};
