import { Route, Routes } from "react-router-dom";
import { RouteNames } from ".";
import { Favourites, Home, NotFound, Settings, Trends } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<Home />} />
      <Route path={RouteNames.FAVOURITES} element={<Favourites />} />
      <Route path={RouteNames.TRENDS} element={<Trends />} />
      <Route path={RouteNames.SETTINGS} element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
