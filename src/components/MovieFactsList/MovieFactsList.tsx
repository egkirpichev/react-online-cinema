import { IMovieFactsList } from "../../types/types";
import { Fact, MovieFacts, Value } from "./styles";

interface IProps {
  movieFactsList: IMovieFactsList;
  $isLightMode: boolean;
}

export const MovieFactsList = ({ movieFactsList, $isLightMode }: IProps) => {
  return (
    <MovieFacts>
      {Object.entries(movieFactsList).map(
        ([fact, value]) =>
          value &&
          value !== "N/A" && (
            <>
              <Fact key={fact}>{fact}</Fact>
              <Value $isLightMode key={value}>
                {value}
              </Value>
            </>
          ),
      )}
    </MovieFacts>
  );
};
