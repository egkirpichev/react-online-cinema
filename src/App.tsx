import { useEffect } from "react";
import { AppRouter } from "./router";
import { OMDbApi } from "./services/OMDbApi";
import { Wrapper } from "./ui/base";

export const App = () => {
  useEffect(() => {
    OMDbApi.getRandomMovies().then((response) => console.log(response));
  }, []);

  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
};
