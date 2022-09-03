import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { ROUTE } from "../../router";

export const RequareAuth = () => {
  const { isLogged } = useAppSelector((userSlice) => userSlice.user);
  return isLogged ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
