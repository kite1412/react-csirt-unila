import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LayananPage from "../pages/LayananPage";
import NotFoundPage from "../pages/NotFoundPage";
import LogoDefinitionPage from "../pages/profile/LogoDefinitionPage";
import CsirtDefinitionPage from "../pages/profile/CsirtDefinitionPage";
import VisiMisiPage from "../pages/profile/VisiMisiPage";
import ReportFormPage from "../pages/ReportFormPage";
import ReportPage from "../pages/ReportPage";
import {
  CSIRT_DEFINITION_PATH,
  KONTAK_KAMI_PATH,
  LAYANAN_PATH,
  LOGO_PATH,
  VISI_MISI_PATH,
} from "../utils/paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
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
      { path: KONTAK_KAMI_PATH, element: <ContactPage /> },
      { path: CSIRT_DEFINITION_PATH, element: <CsirtDefinitionPage /> },
      { path: VISI_MISI_PATH, element: <VisiMisiPage /> },
      { path: LOGO_PATH, element: <LogoDefinitionPage /> },
      { path: LAYANAN_PATH, element: <LayananPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
