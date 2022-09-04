import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ROUTE } from "../../router";
import {
  resetPassword,
  resetPasswordState,
} from "../../store/slices/userSlice";
import { IUserSignIn } from "../../types/types";
import { Color } from "../../ui";
import { Space } from "../../ui/theme";
import { ButtonPrimary } from "../../ui/typography";
import { AuthModal } from "../AuthModal";
import { CustomSpinner } from "../CustomSpinner";
import {
  Body,
  FieldTitle,
  InputField,
  StyledInput,
  StyledForm,
  Title,
  Error,
} from "./styles";

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSignIn>();

  const dispatch = useAppDispatch();
  const { isLoading, isPasswordReset } = useAppSelector(
    (userSlice) => userSlice.user
  );
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<{ email: string }> = (data) => {
    dispatch(resetPassword(data));
  };

  useEffect(() => {
    isPasswordReset &&
      setTimeout(() => {
        navigate(`/${ROUTE.SIGN_IN}`);
        dispatch(resetPasswordState());
      }, 2000);
  }, [isPasswordReset]);

  return (
    <StyledForm
      width={{ S: "574px" }}
      padding={{ S: Space.L }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>Reset Password</Title>
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
      </Body>
      <ButtonPrimary>
        Reset&nbsp;&nbsp;
        {isLoading && (
          <CustomSpinner color={Color.White} still={false} size="20px" />
        )}
      </ButtonPrimary>
      {isPasswordReset && <AuthModal message="Email has been sent" />}
    </StyledForm>
  );
};
