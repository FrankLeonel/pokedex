import DashboardPage from "pages/DashboardPage";
import DetailsPage from "pages/DetailsPage";
import FavoritosPage from "pages/FavoritosPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/favoritos" element={<FavoritosPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
