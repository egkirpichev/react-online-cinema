import { ThemeProvider } from "styled-components";
import { AppRouter } from "./router";
import theme from "./ui/theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />;
    </ThemeProvider>
  );
};
