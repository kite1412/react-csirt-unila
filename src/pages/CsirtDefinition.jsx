import LogoSmall from "../assets/logoSmall.svg?react";

function CsirtDefinition() {
  return (
    <div className="mt-25 ml-25">
      <h3 className="ml-27 font-bold text-2xl">DEFINISI CSIRT</h3>
      <div className="flex justify-center items-center">
        <div className="flex items-center justify-center bg-[#081423]  rounded-full w-[200px] h-[200px] scale-100">
          <LogoSmall className="w-[150px] h-[150px] " />
        </div>
      </div>

      <div className="flex justify-center items-center m-15">
        <div
          className="border-1 border-black rounded-2xl p-10"
          style={{
            boxShadow:
              "0 -4px 6px -1px rgba(0,0,0,0.4), 0 4px 6px -1px rgba(0,0,0,0.4)",
          }}
        >
          <p className=" w-[90ch] text-justify">
            Computer Security Incident Response Team (CSIRT) Universitas Lampung
            adalah tim yang dibentuk untuk menangani insiden keamanan siber di
            lingkungan Universitas Lampung. CSIRT bertugas menerima, meninjau,
            dan merespons insiden yang berkaitan dengan keamanan sistem
            informasi dan teknologi di universitas.pt-25
            <br />
            <br />
            Tim ini berperan penting dalam mengidentifikasi, menganalisis, dan
            menyelesaikan insiden keamanan, serta memastikan langkah mitigasi
            dilakukan untuk mencegah terulangnya insiden serupa di masa
            mendatang. Dengan adanya CSIRT, Universitas Lampung berkomitmen
            untuk menjaga keamanan data dan sistem, serta meningkatkan kesiapan
            dalam menghadapi berbagai ancaman siber.
          </p>
        </div>
      </div>
    </div>
  );
}
export default CsirtDefinition;
