import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ROUTE } from "../../router";
import {
  resetError,
  signUp,
  updateUserProfile,
} from "../../store/slices/userSlice";
import { IUserSignUp } from "../../types";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { ButtonPrimary } from "../../ui/typography";
import { getFirebaseErrorMessage } from "../../utils";
import { AuthModal } from "../AuthModal";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
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
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLoading, isLogged, error } = useAppSelector(
    (userSlice) => userSlice.user
  );

  const onSubmit: SubmitHandler<IUserSignUp> = async (data) => {
    await dispatch(signUp(data)).then(() => dispatch(updateUserProfile(data)));
  };

  useEffect(() => {
    error && dispatch(resetError());
  }, []);

  useEffect(() => {
    if (isLogged) {
      setTimeout(() => {
        navigate(ROUTE.HOME);
      }, 2000);
    }
  }, [isLogged]);

  return (
    <StyledForm
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>Sign Up</Title>
      {error && <ErrorMessage message={error} />}
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
            type="password"
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
      <ButtonPrimary>
        Sign Up&nbsp;&nbsp;
        {isLoading && (
          <CustomSpinner color={Color.White} still={false} size="20px" />
        )}
      </ButtonPrimary>
      <SignIn>
        Already have an account?&nbsp;&nbsp;
        <SignInLink to={`/${ROUTE.SIGN_IN}`}></SignInLink>
      </SignIn>
      {isLogged && <AuthModal message="Signed Up successfully!" />}
    </StyledForm>
  );
};
