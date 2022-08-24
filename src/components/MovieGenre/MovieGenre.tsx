import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { Genre, StyledGenre } from "./styles";

interface IProps {
  genres: any;
}

export const MovieGenre = ({ genres }: IProps) => {
  return (
    <StyledGenre>
      {genres.map(
        (
          genre:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined
        ) => {
          return <Genre>{genre}</Genre>;
        }
      )}
    </StyledGenre>
  );
};
