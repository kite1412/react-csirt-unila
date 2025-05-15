import TextBox from "../components/TextBox";
import LogoLarge from "../assets/logoLarge.svg?react";

function LogoDefinition() {
  return (
    <div className="mt-25 ml-25">
      <h3 className="ml-27 font-bold text-2xl">DEFINISI LOGO</h3>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center bg-[#081423]  rounded-full w-[300px] h-[300px] scale-100">
          <LogoLarge className="w-[300px] h-[200px] " />
        </div>
      </div>

      <div>
        <TextBox
          title={"VISI"}
          paragraph={
            "Menjadi tim respons insiden keamanan siber yang andal, profesional, dan proaktif dalam menjaga keamanan informasi dan teknologi dilingkungan Universitas Lampung."
          }
        />
      </div>
    </div>
  );
}

export default LogoDefinition;
