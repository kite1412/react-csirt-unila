import RfcLayout from "./layout/RfcLayout";
import EyesFilled from "../../assets/eyes-on-filled.svg?react";
import Download from "../../assets/download.svg?react";

export default function LegalBasisPage() {
  const legals = [
    {
      legal: "Peraturan Presiden Nomor 95 Tahun 2018 Sistem Pemerintahan Berbasis Elektronik",
      onSee: () => {},
      onDonwload: () => {},
    },
    {
      legal: "Peraturan Badan Siber dan Sandi Negara Nomor 10 Tahun 2020 tentang Tim Tanggap Insiden Siber",
      onSee: () => {},
      onDonwload: () => {},
    },
    {
      legal: "Peraturan Mendikbudrsitek Nomor 8 Tahun 2022 tentang  Sistem Pemerintahan Berbasis Elektronik Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      onSee: () => {},
      onDonwload: () => {},
    },
  ]
  
  return <RfcLayout className="flex flex-col gap-8">
    <h3 className="text-2xl font-bold">Dasar Hukum</h3>
    <div className="flex flex-col gap-4">
      {
        legals.map(l => (
          <LegalBox 
            key={l.legal}
            legal={l.legal}
            onSee={l.onSee}
            onDownload={l.onDonwload}
          />
        ))
      }
    </div>
  </RfcLayout>;
}

function LegalBox({ legal, onSee, onDownload }) {
  const iconButton = "size-[45px] cursor-pointer select-none"
  
  return (
    <div className="border-1 border-primary rounded-[8px] p-4 flex justify-between items-center">
      <b className="flex-7/8">{legal}</b>
      <div className="flex gap-3 text-on-primary">
        <EyesFilled className={`${iconButton}`} onClick={onSee} />
        <Download className={`${iconButton} p-2`} onClick={onDownload}/>
      </div>
    </div>
  );
}