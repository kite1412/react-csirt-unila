import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ReportPage from "../pages/ReportPage";
import ReportFormPage from "../pages/ReportFormPage";
import ContactPage from "../pages/ContactPage";
import CsirtDefinition from "../pages/CsirtDefinition";
import NotFoundPage from "../pages/NotFoundPage";
import LayananPage from "../pages/LayananPage";
import {
  CSIRT_DEFINITION_PATH,
  LOGO_PATH,
  VISI_MISI_PATH,
  LAYANAN_PATH,
  KONTAK_KAMI_PATH,
} from "../utils/paths";
import VisiMisi from "../pages/VisiMisi";
import LogoDefinition from "../pages/LogoDefinition";

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
      { path: CSIRT_DEFINITION_PATH, element: <CsirtDefinition /> },
      { path: VISI_MISI_PATH, element: <VisiMisi /> },
      { path: LOGO_PATH, element: <LogoDefinition /> },
      { path: LAYANAN_PATH, element: <LayananPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
