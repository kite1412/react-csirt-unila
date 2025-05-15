import LogoLarge from "../assets/logoLarge.svg?react";
import { useState } from "react";
import contentHorizontalPadding from "../styles/contentHorizontalPadding";
import { Link } from "react-router-dom";

const menus = [
  "Beranda",
  "Profil",
  "RFC 2350",
  "Layanan",
  "Panduan",
  "Laporan Insiden",
  "Kontak Kami",
];

export default function Header({ className = "" }) {
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);

  const getMenuPath = (menu) => {
    switch (menu) {
      case "Beranda":
        return "/";
      case "Profil":
        return "/profile/csirt";
      case "RFC 2350":
        return "/rfc-2350";
      case "Layanan":
        return "/services";
      case "Panduan":
        return "/guide";
      case "Laporan Insiden":
        return "/incident-report";
      case "Kontak Kami":
        return "/contact";
      default:
        return "/";
    }
  };

  return (
    <div
      className={`
        flex w-full justify-between items-center pb-4 ${className}
      `}
      style={{
        ...contentHorizontalPadding,
        ...{
          background: "linear-gradient(178.5deg, #081423 75%, white 76%)",
        },
      }}
    >
      <LogoLarge className="aspect-3/2 max-w-[250px]" />
      <div className="flex gap-8 pr-8">
        {menus.map((m) => (
          <Link
            key={m}
            to={getMenuPath(m)}
            style={{ textDecoration: "none" }}
          >
            <Menu
              name={m}
              selected={m === selectedMenu}
              onClick={() => setSelectedMenu(m)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
function Menu({ name, selected, onClick }) {
  return (
    <p
      className={`
        font-medium ${!selected ? "text-white" : "text-on-primary"} cursor-pointer
        text-sm select-none
      `}
      onClick={() => onClick(name)}
    >
      {name}
    </p>
  );
}
