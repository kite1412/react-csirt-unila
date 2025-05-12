import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import contentHorizontalPadding from "../styles/contentHorizontalPadding";

export default function MainLayout() {
  return (
    <div className="w-7xl bg-red-500 mx-auto">
      <Header className="" />
      <div className="flex flex-col justify-between overflow-auto">
        <div className="text-black h-full w-full pt-25">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
