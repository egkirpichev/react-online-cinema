import { Genre, StyledGenre } from "./styles";

interface IProps {
  genres: string[];
}

export const MovieGenre = ({ genres }: IProps) => {
  return (
    <StyledGenre>
      {genres.map((genre: string) => {
        return <Genre key={genre}>{genre}</Genre>;
      })}
    </StyledGenre>
  );
};
