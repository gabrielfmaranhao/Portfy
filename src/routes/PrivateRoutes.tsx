import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import LoadingScreen from "../components/Loading";

const PrivateRoutes = () => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  return user.id ? (
    <Outlet />
  ) : (
    <Navigate replace to="/welcome" state={{ from: location }} />
  );
};

export default PrivateRoutes;
