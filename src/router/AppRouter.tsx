import { Route, Routes } from "react-router-dom";
import { Endpoint } from ".";
import { Favourites, Home, NotFound, Settings, Trends } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={Endpoint.FAVOURITES} element={<Favourites />} />
      <Route path={Endpoint.TRENDS} element={<Trends />} />
      <Route path={Endpoint.SETTINGS} element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
