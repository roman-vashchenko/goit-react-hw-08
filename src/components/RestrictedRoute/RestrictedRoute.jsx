import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectisLoggedIn } from "../../redux/auth/selectors";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
