import GradientButton from "../../components/GradientButton";
import ContentVerticalPadding from "../../layout/ContentVerticalPadding";
import Download from "../../assets/download.svg?react";

export default function DocInfoPage() {
  const pairs = [
    {
      label: "Deskripsi",
      value: `RFC 2350 BMKG-CSIRT mencakup informasi kontak, visi, misi, jenis layanan utama dan tambahan, 
        serta prosedur pelaporan untuk menangani dan mencegah insiden keamanan siber.
      `
    },
    { label: "Versi", value: "1" },
    { label: "Tangal Publikasi", value: "27 May 2025" },
    { label: "Kadaluwarsa", value: "-" },
  ];
  
  return <ContentVerticalPadding className="flex justify-center">
    <div className="flex flex-col h-full gap-4 w-[80%]">
      <h3 className="font-bold text-2xl">Informasi Dokumen</h3>
      <div className="flex gap-10 w-full">
        <div className="flex flex-col w-fit gap-4 items-center">
          <div className="bg-[#D9D9D9] w-[220px] aspect-[2/3] rounded-lg" />
          <GradientButton className="flex w-fit">
            <div className="flex items-center text-white gap-4">
              <Download className="size-[24px]" />
              <b>Download</b>
            </div>
          </GradientButton>
        </div>
        <div className="flex flex-col h-fit border-1 border-[#081423] w-full rounded-[8px]">
          {pairs.map((p, i) => (
            <div>
              <Pair label={p.label} value={p.value} />
              {
                i + 1 < pairs.length && <hr />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  </ContentVerticalPadding>;
}

function Pair({ label, value }) {
  return (
    <div className="flex w-full py-4 px-6 justify-between">
      <b className="flex-1/4">{label}</b>
      <p className="flex-3/4 text-justify">{value}</p>
    </div>
  );
}