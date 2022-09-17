import { IMovieFactsList } from "../../types/types";
import { Fact, MovieFacts, Value } from "./styles";
import { v4 as uuidv4 } from "uuid";

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
              <Fact key={uuidv4()}>{fact}</Fact>
              <Value $isLightMode={$isLightMode} key={uuidv4()}>
                {value}
              </Value>
            </>
          ),
      )}
    </MovieFacts>
  );
};
