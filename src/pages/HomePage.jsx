import ilustration1 from "../assets/ilustration1.png";
import { Link } from "react-router-dom";
import AboutBg from "../assets/aboutBg.svg?react";
import aboutBg from "../assets/aboutBg.svg";

function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      <div
        className=" h-fit flex pt-25 pb-50 px-20 bg-[#081423] justify-between border-1 border-red-500"
        style={
          {
            //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
          }
        }
      >
        <div className="text-white flex flex-col justify-around">
          <h1 className="text-4xl font-semibold">
            COMPUTER SECURITY INCIDENT RESPONSE TEAM
          </h1>
          <h2 className="text-3xl font-semibold">Universitas Lampung</h2>
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
        {/* <img
          src={ilustration1}
          alt=""
          className="w-sm h-auto"
        /> */}
      </div>

      <div className="w-full flex flex-col bg-white">
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
        <h1 className="font-semibold text-black">LAYANAN KAMI</h1>
      </div>
    </div>
  );
}

export default HomePage;
