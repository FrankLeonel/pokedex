import DashboardPage from "pages/DashboardPage";
import DetailsPage from "pages/DetailsPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/details" element={<DetailsPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
