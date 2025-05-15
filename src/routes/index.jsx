import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ReportPage from "../pages/ReportPage";
import ReportFormPage from "../pages/ReportFormPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
      {
        path: "laporan",
        children: [
          {
            path: "", // /laporan
            element: <ReportPage />,
          },
          {
            path: "form-pengaduan-insiden", // /laporan/form-pengaduan-insiden
            element: <ReportFormPage />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
