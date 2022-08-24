import { Route, Routes } from "react-router-dom";
import { Endpoint } from ".";
import { MainTemplate } from "../components/MainTemplate";
import { Favourites, Home, NotFound, Settings, Trends } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Endpoint.HOME} element={<MainTemplate />}>
        <Route index element={<Home />} />
        <Route path={Endpoint.FAVOURITES} element={<Favourites />} />
        <Route path={Endpoint.TRENDS} element={<Trends />} />
        <Route path={Endpoint.SETTINGS} element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
