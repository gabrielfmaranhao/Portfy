import { Routes, Route, Navigate } from "react-router-dom";
import { Feed } from "../pages/Feed";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<LandingPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/feed" element={<Feed />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/welcome" />} />
    </Routes>
  );
};

export default AppRoutes;
