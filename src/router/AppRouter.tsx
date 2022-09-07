import { RiRouteFill } from "react-icons/ri";
import { Route, Routes } from "react-router-dom";
import { AuthTemplate } from "../components/AuthTemplate/AuthTemplate";
import { MainTemplate } from "../components/MainTemplate";
import { RequareAuth } from "../components/RequireAuth";
import {
  Favourites,
  Home,
  NotFound,
  ResetPassword,
  Settings,
  SignIn,
  SignUp,
  Trends,
} from "../pages";
import { Movie } from "../pages/Movie";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={ROUTE.MOVIE} element={<Movie />} />
        <Route path={ROUTE.TRENDS} element={<Trends />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.FAVOURITES} element={<Favourites />} />
          <Route path={ROUTE.FAVOURITE_MOVIE} element={<Movie />} />
          <Route path={ROUTE.TRENDING_MOVIE} element={<Movie />} />
          <Route path={ROUTE.SETTINGS} element={<Settings />} />
        </Route>
      </Route>

      <Route path={ROUTE.HOME} element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPassword />} />
      </Route>
    </Routes>
  );
};
