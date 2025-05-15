import LogoSmall from "../assets/logoSmall.svg?react";

function CsirtDefinition() {
  return (
    <div className="m-4 px-16">
      <h3 className="font-bold text-2xl">DEFINISI CSIRT</h3>
      <div className="flex items-center justify-center">
        <div className="flex justify-center items-center bg-[#081423] p-2 rounded-full w-[250px] aspect-square">
          <LogoSmall className="w-[80%] h-[80%]" />
        </div>
      </div>
      <p className="p-16 text-justify">
        Computer Security Incident Response Team (CSIRT) Universitas Lampung
        adalah tim yang dibentuk untuk menangani insiden keamanan siber di
        lingkungan Universitas Lampung. CSIRT bertugas menerima, meninjau, dan
        merespons insiden yang berkaitan dengan keamanan sistem informasi dan
        teknologi di universitas.
        <br />
        <br />
        Tim ini berperan penting dalam mengidentifikasi, menganalisis, dan
        menyelesaikan insiden keamanan, serta memastikan langkah mitigasi
        dilakukan untuk mencegah terulangnya insiden serupa di masa mendatang.
        Dengan adanya CSIRT, Universitas Lampung berkomitmen untuk menjaga
        keamanan data dan sistem, serta meningkatkan kesiapan dalam menghadapi
        berbagai ancaman siber.
      </p>
    </div>
  );
}
export default CsirtDefinition;
