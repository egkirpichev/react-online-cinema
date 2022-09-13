import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ROUTE } from "../../router";
import { resetError, signUp, updateUserName } from "../../store/slices/userSlice";
import { IUserSignUp } from "../../types";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { ButtonPrimary } from "../../ui/typography";
import { AuthModal } from "../AuthModal";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
import {
  Body,
  FieldTitle,
  InputField,
  StyledForm,
  Title,
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
  const { isLoading, isLogged, error, isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user,
  );

  const onSubmit: SubmitHandler<IUserSignUp> = async (data) => {
    dispatch(signUp(data)).then(() => {
      error && dispatch(updateUserName(data));
    });
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
      $isLightMode={isLightMode}
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title $isLightMode={isLightMode}>Sign Up</Title>
      {error && <ErrorMessage message={error} />}
      <Body>
        <InputField>
          <FieldTitle $isLightMode={isLightMode}>Name</FieldTitle>
          <StyledInput
            $isLightMode={isLightMode}
            type="text"
            placeholder="Your name"
            {...register("name", { required: "Please, enter your name" })}
          />
          {errors.name && errors.name.message && <ErrorMessage message={errors.name.message} />}
        </InputField>
        <InputField>
          <FieldTitle $isLightMode={isLightMode}>Email</FieldTitle>
          <StyledInput
            $isLightMode={isLightMode}
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Please, enter account e-mail" })}
          />
          {errors.email && errors.email.message && <ErrorMessage message={errors.email.message} />}
        </InputField>
        <InputField>
          <FieldTitle $isLightMode={isLightMode}>Password</FieldTitle>
          <StyledInput
            $isLightMode={isLightMode}
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
          {errors.password && errors.password.message && (
            <ErrorMessage message={errors.password.message} />
          )}
        </InputField>
        <InputField>
          <FieldTitle $isLightMode={isLightMode}>Confirm Password</FieldTitle>
          <StyledInput
            $isLightMode={isLightMode}
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Please, confrim the password",
              validate: (value) => value === passwordValue || "Entered passwords do not match",
            })}
          />
          {errors.confirmPassword && errors.confirmPassword.message && (
            <ErrorMessage message={errors.confirmPassword.message} />
          )}
        </InputField>
      </Body>
      <ButtonPrimary type="submit">
        Sign Up&nbsp;&nbsp;
        {isLoading && <CustomSpinner color={Color.White} still={false} size="20px" />}
      </ButtonPrimary>
      <SignIn>
        Already have an account?&nbsp;&nbsp;
        <SignInLink to={`/${ROUTE.SIGN_IN}`}>Sign In</SignInLink>
      </SignIn>
      {isLogged && <AuthModal message="Signed Up successfully!" />}
    </StyledForm>
  );
};
