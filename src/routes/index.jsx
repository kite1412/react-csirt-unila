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
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import AdminPage from "../pages/AdminPage";
import DashboardReportsPage from "../pages/admin/DashboardReportsPage";
import DashboardUsersPage from "../pages/admin/DashboardUsersPage";
import DashboardSettingsPage from "../pages/admin/DashboardSettingsPage";
import {
  CONTACT_PATH,
  CSIRT_DEFINITION_PATH,
  DASHBOARD_PATH,
  DOC_INFO_PATH,
  LEGAL_BASIS_PATH,
  LOGO_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  POLICIES_PATH,
  REPORT_FORM_PATH,
  REPORT_PATH,
  SERVICES_PATH,
  VISION_MISSION_PATH,
  GUIDE_PATH,
} from "../utils/paths";
import DocInfoPage from "../pages/rfc/DocInfoPage";
import LegalBasisPage from "../pages/rfc/LegalBasisPage";
import PoliciesPage from "../pages/rfc/PoliciesPage";
import GuidePage from "../pages/GuidePage";

const router = createBrowserRouter([
  {
    path: LOGIN_PATH,
    element: <LoginPage />,
  },
  {
    path: REGISTER_PATH,
    element: <RegisterPage />,
  },
  // Admin dashboard section - independent of MainLayout (no header/footer)
  {
    path: DASHBOARD_PATH,
    element: <AdminRoute />,
    children: [
      {
        path: "",
        element: <AdminPage />,
        children: [
          { path: "", element: <DashboardPage /> },
          { path: "reports", element: <DashboardReportsPage /> },
          { path: "users", element: <DashboardUsersPage /> },
          { path: "settings", element: <DashboardSettingsPage /> },
        ],
      },
    ],
  },
  // Regular website with header and footer
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      // Regular user routes that require authentication
      {
        path: "",
        element: <ProtectedRoute />,
        children: [
          {
            path: REPORT_PATH,
            children: [
              {
                path: "",
                element: <ReportPage />,
              },
              {
                path: REPORT_FORM_PATH,
                element: <ReportFormPage />,
              },
            ],
          },
          // { path: GUIDE_PATH, element: <GuidePage /> },
        ],
      },
      { path: CONTACT_PATH, element: <ContactPage /> },
      { path: CSIRT_DEFINITION_PATH, element: <CsirtDefinitionPage /> },
      { path: VISION_MISSION_PATH, element: <VisionMissionPage /> },
      { path: LOGO_PATH, element: <LogoDefinitionPage /> },
      { path: DOC_INFO_PATH, element: <DocInfoPage /> },
      { path: LEGAL_BASIS_PATH, element: <LegalBasisPage /> },
      { path: GUIDE_PATH, element: <GuidePage /> },
      { path: POLICIES_PATH, element: <PoliciesPage /> },
      { path: SERVICES_PATH, element: <ServicesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
