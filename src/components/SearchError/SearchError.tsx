import { ErrorMessage } from "../ErrorMessage";
import { ErrorContiner } from "./styles";

interface IProps {
  message: string;
}

export const SearchError = ({ message }: IProps) => {
  return (
    <ErrorContiner>
      <ErrorMessage message={message} />
    </ErrorContiner>
  );
};
