import { SubmitHandler, useForm } from "react-hook-form";
import { IUserSignIn } from "../../types/types";
import { Space } from "../../ui/theme";
import { ButtonPrimary } from "../../ui/typography";
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

  const onSubmit: SubmitHandler<IUserSignIn> = (data) => console.log(data);

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
      <ButtonPrimary>Reset</ButtonPrimary>
    </StyledForm>
  );
};
