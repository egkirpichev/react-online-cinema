import { Color } from "../../ui";
import { Spinner } from "./styles";

interface IProps {
  color: Color;
}

export const CustomSpinner = ({ color }: IProps) => {
  return <Spinner color={color} />;
};
