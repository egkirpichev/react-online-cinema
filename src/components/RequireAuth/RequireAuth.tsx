import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store/hooks";
import { ROUTE } from "../../router";

export const RequareAuth = () => {
  const { isLogged } = useAppSelector(({ persistedReducer }) => persistedReducer.user);
  return isLogged ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
