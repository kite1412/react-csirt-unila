import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoLarge from "../assets/logoLarge.svg?react";
import TriangleDown from "../assets/triangle-down.svg?react";
import contentHorizontalPadding from "../styles/contentHorizontalPadding";
import {
  CONTACT_PATH,
  CSIRT_DEFINITION_PATH,
  DOC_INFO_PATH,
  GUIDE_PATH,
  HOME_PATH,
  LAPORAN_INSIDEN_PATH,
  LEGAL_BASIS_PATH,
  LOGO_PATH,
  POLICY_PATH,
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
      { name: "Kebijakan", path: POLICY_PATH },
    ],
  },
  { name: "Layanan", path: SERVICES_PATH },
  { name: "Panduan", path: GUIDE_PATH },
  { name: "Laporan Insiden", path: LAPORAN_INSIDEN_PATH },
  { name: "Kontak Kami", path: CONTACT_PATH },
];

const unclipBackgroundMenus = [HOME_PATH, CONTACT_PATH];

export default function Header({ className = "" }) {
  const location = useLocation();

  return (
    <div
      className={`
        z-[99] flex w-full justify-between items-center ${className} absolute
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
      <div className="flex gap-8 pr-8">
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
  const color = isActive ? "text-on-primary" : "text-white"

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
