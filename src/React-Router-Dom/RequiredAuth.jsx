import { Navigate, useLocation } from "react-router-dom";
import { userAuth } from "./Authentication";

const RequiredAuth = ({ children }) => {
  const auth = userAuth();
  const locateme = useLocation();

  if (!auth.user) {
    return <Navigate to={"/login"} state={{path: locateme.pathname}} replace={true} />;
  }

  return children;
};

export default RequiredAuth;
