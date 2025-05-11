import LogoLarge from "../assets/logoLarge.svg?react";
import { Link, useLocation } from "react-router-dom";
import contentHorizontalPadding from "../styles/contentHorizontalPadding";

const menus = [
  { name: "Beranda", path: "/" },
  { name: "Profil", path: "/profile" },
  { name: "RFC 2350", path: "/rfc" },
  { name: "Layanan", path: "/layanan" },
  { name: "Panduan", path: "/panduan" },
  { name: "Laporan Insiden", path: "/laporan" },
  { name: "Kontak Kami", path: "/kontak" },
];

export default function Header({ className = "" }) {
  const location = useLocation();

  return (
    <div
      className={`
        flex w-full justify-between items-center pb-4 ${className}
      `}
      style={{
        ...contentHorizontalPadding,
        background: "linear-gradient(178.5deg, #081423 75%, white 76%)",
      }}
    >
      <LogoLarge className="aspect-3/2 max-w-[250px]" />
      <div className="flex gap-8 pr-8">
        {menus.map(({ name, path }) => (
          <Menu
            key={name}
            name={name}
            path={path}
            selected={location.pathname === path}
          />
        ))}
      </div>
    </div>
  );
}

function Menu({ name, path, selected }) {
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
