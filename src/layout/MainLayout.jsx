import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, mirror: true });
  }, []);
  return (
    <div className="w-full bg-white mx-auto relative flex flex-col">
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
