import { Link } from "react-router-dom";
import NotFound from "../assets/notFound.svg?react";
import { HOME_PATH } from "../utils/paths";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col text-center mt-15">
      <p className="font-sans italic">Maaf :)</p>
      <h3 className="font-bold text-2xl ">PAGE TIDAK DITEMUKAN</h3>
      <Link
        to={HOME_PATH}
        className="font-sans italic text-on-primary hover:text-black transition-all ease-in mt-3"
      >
        Kembali Ke Beranda?
      </Link>
      <div className="flex items-center justify-center ">
        <NotFound className="w-2xl" />
      </div>
    </div>
  );
}
