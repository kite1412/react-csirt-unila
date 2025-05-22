import CyberIcon from "../assets/cyberIcon.svg?react";

function CyberSec() {
  return (
    <div
      className="w-full h-fit rounded-xl flex flex-col items-center justify-between py-5 text-white"
      style={{
        background:
          "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
      }}
    >
      <CyberIcon className="w-16 h-16 mb-5" />
      <div className="text-center font-semibold">
        Pengelolaan Keamanan Siber
        <br />
        (Security Management Services)
      </div>
    </div>
  );
}

export default CyberSec;
