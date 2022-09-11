import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import { IFilters, MovieTypeOption } from "../../types";
import {
  Body,
  Cancel,
  Control,
  Field,
  FieldTitle,
  InputField,
  RadioGroup,
  Save,
  selectStyles,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledRadio,
  Title,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { MovieType } from "../../config";
import { setFilters } from "../../store/slices/searchSlice";

interface IProps {
  setIsOpen: () => void;
}

export const FiltersForm = ({ setIsOpen }: IProps) => {
  const { register, reset, control, handleSubmit } = useForm<IFilters>();

  const { isLightMode } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );

  const dispatch = useAppDispatch();

  const onSumbit: SubmitHandler<IFilters> = (data) => {
    console.log(data);
    setIsOpen();
    dispatch(setFilters(data));
  };

  const MovieTypeOptions: MovieTypeOption[] = [
    { value: "", label: "All" },
    { value: MovieType.Movie, label: "Movie" },
    { value: MovieType.Series, label: "Series" },
    { value: MovieType.Episode, label: "Episode" },
  ];

  return (
    <StyledForm onSubmit={handleSubmit(onSumbit)}>
      <Title $isLightMode={isLightMode}>Filters</Title>
      <Field>
        <Body $isLightMode={isLightMode}>
          <InputField>
            <FieldTitle $isLightMode={isLightMode}>Sort by</FieldTitle>
            <RadioGroup>
              <StyledRadio
                type="radio"
                id="title"
                value="title"
                {...register("sortBy")}
              />
              <StyledLabel htmlFor="title">Title</StyledLabel>
              <StyledRadio
                type="radio"
                id="year"
                value="year"
                {...register("sortBy")}
              />
              <StyledLabel htmlFor="year">Year</StyledLabel>
            </RadioGroup>
          </InputField>
        </Body>
      </Field>
      <Field>
        <Body $isLightMode={isLightMode}>
          <InputField>
            <FieldTitle $isLightMode={isLightMode}>Select type</FieldTitle>
            <Controller
              control={control}
              defaultValue={""}
              name="type"
              render={({ field: { onChange } }) => (
                <Select
                  options={MovieTypeOptions}
                  isMulti={false}
                  isSearchable={false}
                  styles={selectStyles}
                  defaultValue={MovieTypeOptions[0]}
                  onChange={(options) => options && onChange(options.value)}
                />
              )}
            />
          </InputField>
        </Body>
      </Field>
      <Field>
        <Body $isLightMode={isLightMode}>
          <InputField>
            <FieldTitle $isLightMode={isLightMode}>Year</FieldTitle>
            <StyledInput
              $isLightMode={isLightMode}
              type="string"
              placeholder="Type in movie release year"
              {...register("year")}
            />
          </InputField>
        </Body>
      </Field>
      <Control>
        <Cancel
          type="button"
          onClick={() => {
            setIsOpen();
          }}
        >
          Cancel
        </Cancel>
        <Save type="submit">Save</Save>
      </Control>
    </StyledForm>
  );
};
