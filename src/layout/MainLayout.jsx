import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout() {
  return (
    <div className="w-full bg-white mx-auto relative flex flex-col overflow-auto">
      <Header className="" />
      <div className="h-full flex flex-col justify-between">
        <div className="text-black">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
