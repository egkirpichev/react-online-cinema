import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ROUTE } from "../../router";
import { resetError, signIn } from "../../store/slices/userSlice";
import { IUserSignIn } from "../../types/types";
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
  StyledInput,
  ResetPassword,
  SignUp,
  SignUpLink,
  StyledForm,
  Title,
} from "./styles";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignIn>();

  const dispatch = useAppDispatch();
  const { isLogged, isLoading, error, isLightMode } = useAppSelector(
    (userSlice) => userSlice.user
  );
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUserSignIn> = (data) => {
    dispatch(signIn(data));
  };

  useEffect(() => {
    error && dispatch(resetError());
  }, []);

  useEffect(() => {
    isLogged &&
      setTimeout(() => {
        navigate(ROUTE.HOME);
      }, 2000);
  }, [isLogged]);

  return (
    <StyledForm
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
      isLightMode={isLightMode}
    >
      <Title isLightMode={isLightMode}>Sign In</Title>
      {error && <ErrorMessage message={error} />}
      <Body>
        <InputField>
          <FieldTitle isLightMode={isLightMode}>Email</FieldTitle>
          <StyledInput
            isLightMode={isLightMode}
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Please, enter account e-mail" })}
          />
          {errors.email && errors.email.message && (
            <ErrorMessage message={errors.email.message} />
          )}
        </InputField>
        <InputField>
          <FieldTitle isLightMode={isLightMode}>Password</FieldTitle>
          <StyledInput
            isLightMode={isLightMode}
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
          {errors.password && errors.password.message && (
            <ErrorMessage message={errors.password.message} />
          )}
          <ResetPassword to={`/${ROUTE.RESET_PASSWORD}`}>
            Forgot password?
          </ResetPassword>
        </InputField>
      </Body>
      <ButtonPrimary type="submit">
        Sign In&nbsp;&nbsp;
        {isLoading && (
          <CustomSpinner color={Color.White} still={false} size="20px" />
        )}
      </ButtonPrimary>
      <SignUp>
        Dont have and account?&nbsp;&nbsp;
        <SignUpLink to={`/${ROUTE.SIGN_UP}`}> Sign Up</SignUpLink>
      </SignUp>
      {isLogged && <AuthModal message="Signed In successfully!" />}
    </StyledForm>
  );
};
