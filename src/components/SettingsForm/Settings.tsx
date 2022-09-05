import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector, useToggle } from "../../hooks";
import {
  reauthentificate,
  updateUserCredentials,
  updateUserEmail,
  updateUserName,
  updateUserPassword,
} from "../../store/slices/userSlice";
import { ISettings } from "../../types";
import { Color } from "../../ui";
import { CustomSpinner } from "../CustomSpinner";
import { ErrorMessage } from "../ErrorMessage";
import Switch from "react-switch";
import {
  Body,
  Cancel,
  Control,
  Field,
  FieldDescription,
  FieldTitle,
  InputField,
  Save,
  StyledForm,
  StyledInput,
  Title,
} from "./styles";

export const SettingsForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<ISettings>();
  const newPasswordValue = watch("newPassword", "");

  const { name, email, isLightMode, isLoading, error } = useAppSelector(
    (userSlice) => userSlice.user
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSumbit: SubmitHandler<ISettings> = (data) => {
    dispatch(reauthentificate(data))
      .unwrap()
      .then(() => dispatch(updateUserName(data)).unwrap())
      .then(() => dispatch(updateUserEmail(data)).unwrap())
      .then(() => dispatch(updateUserPassword(data)).unwrap())
      .then(() => dispatch(updateUserCredentials()))
      .finally(() => {
        resetField("password");
        resetField("newPassword");
        resetField("confirmPassword");
      });
  };

  const [isChecked, setIsChecked] = useToggle();

  return (
    <StyledForm onSubmit={handleSubmit(onSumbit)}>
      <Field>
        <Title>Profile</Title>
        <Body>
          <InputField maxWidth={{ S: "45%" }}>
            <FieldTitle>Name</FieldTitle>
            <StyledInput
              type="text"
              placeholder="Your name"
              {...register("name", {
                required: "Please, enter your name",
                value: name as string,
              })}
            />
            {errors.name && errors.name.message && (
              <ErrorMessage message={errors.name.message} />
            )}
          </InputField>
          <InputField width={{ S: "45%" }}>
            <FieldTitle>Email</FieldTitle>
            <StyledInput
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Please, enter a valid account e-mail",
                value: email as string,
              })}
            />
            {errors.email && errors.email.message && (
              <ErrorMessage message={errors.email.message} />
            )}
          </InputField>
        </Body>
      </Field>
      <Field>
        <Title>Password</Title>
        <Body>
          <InputField width={{ S: "45%" }}>
            <FieldTitle>Password</FieldTitle>
            <StyledInput
              type="password"
              placeholder="Your password"
              {...register("password", {
                required: "Please, enter your current password first",
              })}
            />
            {errors.password && errors.password.message && (
              <ErrorMessage message={errors.password.message} />
            )}
          </InputField>
          <InputField width={{ S: "45%" }}>
            <FieldTitle>New Password</FieldTitle>
            <StyledInput
              type="password"
              placeholder="New password"
              {...register("newPassword", {
                minLength: {
                  value: 6,
                  message: "Password should be at leat 6 characters long",
                },
              })}
            />
            {errors.newPassword && errors.newPassword.message && (
              <ErrorMessage message={errors.newPassword.message} />
            )}
          </InputField>
          <InputField width={{ S: "45%" }} margin="0 0 0 auto">
            <FieldTitle>Confirm Password</FieldTitle>
            <StyledInput
              type="password"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === newPasswordValue ||
                  "Entered passwords do not match",
              })}
            />
            {errors.confirmPassword && errors.confirmPassword.message && (
              <ErrorMessage message={errors.confirmPassword.message} />
            )}
          </InputField>
        </Body>
      </Field>
      <Field>
        <Title>Color mode</Title>
        <Body justifyContent="space-between" alignItems="center">
          <InputField width="120px">
            <FieldTitle>Light</FieldTitle>
            <FieldDescription>Use light thema</FieldDescription>
          </InputField>
          <Switch
            onChange={setIsChecked}
            checked={isChecked}
            onColor={Color.PrimaryDark}
            offColor={Color.Secondary}
          />
        </Body>
      </Field>
      {error && <ErrorMessage message={error} />}
      <Control>
        <Cancel
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </Cancel>
        <Save type="submit">
          Save&nbsp;&nbsp;
          {isLoading && (
            <CustomSpinner color={Color.White} still={false} size="20px" />
          )}
        </Save>
      </Control>
    </StyledForm>
  );
};
