import ilustration1 from "../assets/ilustration1.png";
import { Link } from "react-router-dom";
import AboutBg from "../assets/aboutBg.svg?react";
import aboutBg from "../assets/aboutBg.svg";

function HomePage() {
  return (
    <div className="w-full">
      <div
        className="w-full h-fit flex pt-5 pb-50 px-10"
        style={{
          background: "linear-gradient(185.9deg, #081423 75%, white 76%)",
        }}
      >
        <div className="text-white flex flex-col">
          <h1 className="text-[40px] font-bold">
            COMPUTER SECURITY INCIDENT RESPONSE TEAM
          </h1>
          <h2 className="text-[36px] font-bold">Universitas Lampung</h2>
          <p className="w-xl h-fit">
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
            className="border-1 border-gray-100 w-fit h-fit py-2 px-8 rounded-xl"
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
    </div>
  );
}

export default HomePage;
