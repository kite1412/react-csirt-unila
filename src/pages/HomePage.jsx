import ilustration1 from "../assets/ilustration1.png";
import { Link } from "react-router-dom";
import ProactiveIcon from "../assets/proactiveIcon.svg?react";
import ReactiveIcon from "../assets/reactiveIcon.svg?react";
import CyberIcon from "../assets/cyberIcon.svg?react";
import CaseCountCard from "../components/CaseCountCard";
import CaseChart from "../components/CaseChart";
import FacultyWebCaseCards from "../components/FacultryWebCaseCards";

function HomePage() {
  return (
    <div className="flex flex-col bg-white gap-50 pb-50">
      <div
        className=" h-fit flex pt-25 pb-50 px-20 bg-[#081423] justify-between"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
        }}
      >
        <div className="text-white flex flex-col justify-around">
          <div className="gradient-text">
            <h1 className="text-4xl font-semibold">
              COMPUTER SECURITY INCIDENT RESPONSE TEAM
            </h1>
            <h2 className="text-3xl font-semibold">Universitas Lampung</h2>
          </div>
          <p className="w-2xl h-fit ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            amet placeat unde, magnam ducimus delectus, natus tenetur
            voluptatibus maiores non blanditiis molestias odio, impedit earum
            consequatur esse minus. Neque, veniam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias rerum fuga sint perferendis
            laboriosam earum exercitationem corporis, necessitatibus neque
            distinctio praesentium accusamus aliquam cumque pariatur ipsum
            tempore cum natus ea.
          </p>
          <Link
            to="/selengkapnya"
            className="border-1 border-gray-100 w-fit h-fit py-2 px-8 rounded-xl font-semibold"
            style={{
              background:
                "radial-gradient(circle at 53.63% 50.75%, #081423 30%, #1DBBB7 80%)",
            }}
          >
            Selengkapnya
          </Link>
        </div>
        <img
          src={ilustration1}
          alt=""
          className="w-sm h-auto"
        />
      </div>

      <div className="w-full h-fit flex flex-col items-center px-20 gap-10 text-white">
        <h1 className="font-semibold text-black text-2xl">LAYANAN KAMI</h1>
        <div className="w-full flex justify-between gap-10">
          <div
            className=" w-full h-fit  rounded-xl flex flex-col items-center justify-between py-5"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <ProactiveIcon />
            <div className="text-center font-semibold">
              Layanan Proaktif
              <br />
              (Proactive Services)
            </div>
          </div>
          <div
            className=" w-full h-fit  rounded-xl flex flex-col items-center justify-between py-5"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <ReactiveIcon />
            <div className="text-center font-semibold">
              Layanan Reaktif
              <br />
              (Reactive Services)
            </div>
          </div>
          <div
            className=" w-full h-fit  rounded-xl flex flex-col items-center justify-between py-5"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <CyberIcon />
            <div className="text-center font-semibold">
              Pengelolaan Keamanan Siber
              <br />
              (Security Management Services)
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex flex-col items-center px-20 gap-10 ">
        <h1 className="font-semibold text-black text-2xl">
          STATISTIK KEAMANAN WEBSITE UNILA
        </h1>
        <div className="flex gap-10 w-full justify-center">
          <CaseCountCard className="" />
          <CaseChart className="" />
        </div>
      </div>

      <div className="w-full h-fit flex flex-col items-center px-20 gap-10 ">
        <h1 className="font-semibold text-black text-2xl">
          KASUS WEBSITE FAKULTAS
        </h1>
        <FacultyWebCaseCards />
      </div>
    </div>
  );
}

export default HomePage;
