import { useEffect } from "react";
import { AppRouter } from "./router";
import { OMDbApi } from "./services/OMDbApi";
import { Wrapper } from "./ui/base";

export const App = () => {
  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
};
