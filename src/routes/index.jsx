import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
// import ProfilePage from "../pages/ProfilePage";
import CsirtDefinition from "../pages/CsirtDefinition";
import NotFoundPage from "../pages/NotFoundPage";
import {
  CSIRT_DEFINITION_PATH,
  LOGO_PATH,
  VISI_MISI_PATH,
} from "../utils/paths";
import VisiMisi from "../pages/VisiMisi";
import LogoDefinition from "../pages/LogoDefinition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: CSIRT_DEFINITION_PATH, element: <CsirtDefinition /> },
      { path: VISI_MISI_PATH, element: <VisiMisi /> },
      { path: LOGO_PATH, element: <LogoDefinition /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default router;
