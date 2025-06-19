import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth-slice";
import LogoLarge from "../assets/logoLarge.svg?react";
import TriangleDown from "../assets/triangle-down.svg?react";
import contentHorizontalPadding from "../styles/contentHorizontalPadding";
import {
  CONTACT_PATH,
  CSIRT_DEFINITION_PATH,
  DASHBOARD_PATH,
  DOC_INFO_PATH,
  GUIDE_PATH,
  HOME_PATH,
  LEGAL_BASIS_PATH,
  LOGO_PATH,
  LOGIN_PATH,
  POLICIES_PATH,
  REPORT_PATH,
  SERVICES_PATH,
  VISION_MISSION_PATH,
} from "../utils/paths";

const menus = [
  { name: "Beranda", path: HOME_PATH },
  {
    name: "Profil",
    submenu: [
      { name: "Definisi CSIRT?", path: CSIRT_DEFINITION_PATH },
      { name: "Visi dan Misi", path: VISION_MISSION_PATH },
      { name: "Definisi Logo", path: LOGO_PATH },
    ],
  },
  {
    name: "RFC 2350",
    submenu: [
      { name: "Informasi Dokumen", path: DOC_INFO_PATH },
      { name: "Dasar Hukum", path: LEGAL_BASIS_PATH },
      { name: "Kebijakan", path: POLICIES_PATH },
    ],
  },
  { name: "Layanan", path: SERVICES_PATH },
  { name: "Panduan", path: GUIDE_PATH },
  { name: "Laporan Insiden", path: REPORT_PATH },
  { name: "Kontak Kami", path: CONTACT_PATH },
];

const unclipBackgroundMenus = [HOME_PATH, CONTACT_PATH];

export default function Header({ className = "" }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(HOME_PATH);
  };

  return (
    <div
      className={`
        z-[99] flex w-full justify-between items-center ${className}
      `}
      style={{
        ...contentHorizontalPadding,
        background: `${
          unclipBackgroundMenus.includes(location.pathname)
            ? "#081423"
            : "linear-gradient(179deg, #081423 80%, white 81%)"
        }`,
      }}
    >
      <LogoLarge className="aspect-3/2 max-w-[250px]" />
      <div className="flex gap-8 pr-8 items-center">
        {menus.map((menu) =>
          menu.submenu ? (
            <DropdownMenu
              key={menu.name}
              menu={menu}
              location={location}
            />
          ) : (
            <Menu
              key={menu.name}
              name={menu.name}
              path={menu.path}
              selected={location.pathname === menu.path}
            />
          )
        )}{" "}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            {user?.role === "admin" && (
              <Link
                to={DASHBOARD_PATH}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
              >
                Admin Dashboard
              </Link>
            )}
            {user?.role === "admin" ? (
              <span className="text-sm text-white">
                {user.email}
                <span className="ml-2 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded">
                  Admin
                </span>
              </span>
            ) : (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                {user?.email?.charAt(0).toUpperCase() || "U"}
              </div>
            )}

            <button
              onClick={handleLogout}
              className={`hover:bg-white/20 text-white rounded text-sm ${
                user?.role === "admin"
                  ? "bg-white/10 py-1 px-3"
                  : "bg-transparent p-1"
              }`}
              title="Logout"
            >
              {" "}
              {user?.role === "admin" ? (
                "Logout"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <Link
            to={LOGIN_PATH}
            className="bg-white/10 hover:bg-white/20 text-white py-1 px-3 rounded text-sm"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

function Menu({ name, path }) {
  const isRoot = path === "/";
  const selected = isRoot
    ? location.pathname === "/"
    : location.pathname.startsWith(path);
  return (
    <Link
      to={path}
      className={`
        font-medium ${!selected ? "text-white" : "text-on-primary"} cursor-pointer
        text-sm select-none no-underline text-current
      `}
    >
      {name}
    </Link>
  );
}

function DropdownMenu({ menu, location }) {
  const [open, setOpen] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);

  const isActive = menu.submenu.some((sub) => sub.path === location.pathname);
  const color = isActive ? "text-on-primary" : "text-white";

  return (
    <div className="relative">
      <div
        className={`font-medium text-sm cursor-pointer select-none flex items-center ${color}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() =>
          setTimeout(() => {
            if (!dropdownHovered) setOpen(false);
          }, 100)
        }
      >
        {menu.name}
        <TriangleDown className={`size-[1rem] ${color}`} />
      </div>

      <div className="absolute top-full left-0 mt-1">
        <div
          className={`w-48 bg-[#081423] shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform ${
            open || dropdownHovered
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
          onMouseEnter={() => setDropdownHovered(true)}
          onMouseLeave={() => setDropdownHovered(false)}
        >
          {menu.submenu.map((sub) => (
            <Link
              key={sub.name}
              to={sub.path}
              className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                location.pathname === sub.path
                  ? "text-on-primary bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setDropdownHovered(false)}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
