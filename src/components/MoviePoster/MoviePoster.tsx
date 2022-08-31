import { StyledMoviePoster } from "./styles";

interface IProps {
  poster: string;
}

export const MoviePoster = ({ poster }: IProps) => {
  return (
    <StyledMoviePoster maxHeight={{ S: "279px", XL: "357px" }} src={poster} />
  );
};
