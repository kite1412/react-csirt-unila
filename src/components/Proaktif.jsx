import ProactiveIcon from "../assets/proactiveIcon.svg?react";

function Proaktif() {
  return (
    <div
      className="w-full h-fit rounded-xl flex flex-col items-center justify-between py-5 text-white"
      style={{
        background:
          "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
      }}
    >
      <ProactiveIcon className="w-16 h-16 mb-5" />
      <div className="text-center font-semibold">
        Layanan Proaktif
        <br />
        (Proactive Services)
      </div>
    </div>
  );
}

export default Proaktif;
