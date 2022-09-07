import { ThemeProvider } from "styled-components";
import { AppRouter } from "./router";
import theme from "./ui/theme";
import "./services/FireBase/fireBase";
import { useAppDispatch, useAppSelector } from "./hooks";
import { authenticate } from "./store/slices/userSlice";
import { auth } from "./services/FireBase/fireBase";
import { useEffect } from "react";

export const App = () => {
  const { isLogged } = useAppSelector(
    ({ persistedReducer }) => persistedReducer.user
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLogged) {
      return () => {
        auth.onAuthStateChanged((user) => dispatch(authenticate(user)));
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
};
