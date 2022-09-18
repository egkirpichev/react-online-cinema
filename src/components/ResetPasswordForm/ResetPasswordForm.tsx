import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
  resetError,
  resetPassword,
  resetPasswordState,
} from "store";
import { ROUTE } from "router";
import { ButtonPrimary, Color, Space } from "ui";
import { AuthModal, CustomSpinner, ErrorMessage } from "components";
import { Body, FieldTitle, InputField, StyledInput, StyledForm, Title, Error } from "./styles";
import { IUserSignIn } from "types";

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignIn>();

  const dispatch = useAppDispatch();
  const { isLoading, isPasswordReset, error, isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user,
  );
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    dispatch(resetPassword(data));
  };

  useEffect(() => {
    error && dispatch(resetError());
  }, [dispatch, error]);

  useEffect(() => {
    isPasswordReset &&
      setTimeout(() => {
        navigate(`/${ROUTE.SIGN_IN}`);
        dispatch(resetPasswordState());
      }, 2000);
  }, [dispatch, isPasswordReset, navigate]);

  return (
    <StyledForm
      $isLightMode={isLightMode}
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title $isLightMode={isLightMode}>Reset Password</Title>
      {error && <ErrorMessage message={error} />}
      <Body>
        <InputField>
          <FieldTitle $isLightMode={isLightMode}>Email</FieldTitle>
          <StyledInput
            $isLightMode={isLightMode}
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Please, enter account e-mail" })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputField>
      </Body>
      <ButtonPrimary type="submit">
        Reset&nbsp;&nbsp;
        {isLoading && <CustomSpinner color={Color.White} still={false} size="20px" />}
      </ButtonPrimary>
      {isPasswordReset && <AuthModal message="Email has been sent" />}
    </StyledForm>
  );
};
