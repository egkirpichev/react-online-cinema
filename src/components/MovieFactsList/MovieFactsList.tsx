import { IMovieFactsList } from "../../types/types";
import { Fact, MovieFacts, Value } from "./styles";

interface IProps {
  movieFactsList: IMovieFactsList;
}

export const MovieFactsList = ({ movieFactsList }: IProps) => {
  return (
    <MovieFacts>
      {Object.entries(movieFactsList).map(
        ([fact, value]) =>
          value &&
          value !== "N/A" && (
            <>
              <Fact key={fact}>{fact}</Fact>
              <Value key={value}>{value}</Value>
            </>
          )
      )}
    </MovieFacts>
  );
};
