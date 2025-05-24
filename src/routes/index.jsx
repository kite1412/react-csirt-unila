import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CsirtDefinitionPage from "../pages/profile/CsirtDefinitionPage";
import LogoDefinitionPage from "../pages/profile/LogoDefinitionPage";
import VisionMissionPage from "../pages/profile/VisionMissionPage";
import ReportFormPage from "../pages/ReportFormPage";
import ReportPage from "../pages/ReportPage";
import ServicesPage from "../pages/ServicesPage";
import {
  CONTACT_PATH,
  CSIRT_DEFINITION_PATH,
  LOGO_PATH,
  SERVICES_PATH,
  VISION_MISSION_PATH,
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
      { path: CONTACT_PATH, element: <ContactPage /> },
      { path: CSIRT_DEFINITION_PATH, element: <CsirtDefinitionPage /> },
      { path: VISION_MISSION_PATH, element: <VisionMissionPage /> },
      { path: LOGO_PATH, element: <LogoDefinitionPage /> },
      { path: SERVICES_PATH, element: <ServicesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
