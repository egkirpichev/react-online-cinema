import { ReactNode } from "react";
import { StyledMoviePoster } from "./styles";

interface IProps {
  poster: string;
  children?: ReactNode;
}

export const MoviePoster = ({ poster }: IProps) => {
  return <StyledMoviePoster poster={poster}></StyledMoviePoster>;
};
