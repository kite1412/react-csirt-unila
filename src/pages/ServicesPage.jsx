import TextBoxWidth from "../components/TextBoxWidth";
import ReactiveIcon from "../assets/reactiveIcon.svg?react";
import CyberIcon from "../assets/cyberIcon.svg?react";
import ProactiveIcon from "../assets/proactiveIcon.svg?react";
import ContentVerticalPadding from "../layout/ContentVerticalPadding";

export default function ServicePage() {
  return <ContentVerticalPadding>
    <h3 className="text-center font-bold text-2xl mb-15">
      LAYANAN CSIRT UNILA
    </h3>
    <div>
      <TextBoxWidth
        title={"Layanan Proaktif (Proactive Services)"}
        layanan={<Proaktif />}
        content={
          <>
            <p className="mb-3">
              Layanan ini bertujuan untuk mencegah insiden keamanan sebelum
              terjadi. Unila-CSIRT memiliki beberapa layanan proaktif:
            </p>
            <ol className="list-disc list-outside ml-6 space-y-1">
              <li>
                Risk Analysis (Analisis Risiko): Mengidentifikasi dan
                mengevaluasi potensi ancaman terhadap sistem IT.
              </li>
              <li>
                Security Audits (Audit Keamanan): Meninjau sistem dan
                kebijakan keamanan organisasi untuk menemukan kelemahan.
              </li>
            </ol>
          </>
        }
      />

      <TextBoxWidth
        title={"Layanan Reaktif (Reactive Services)"}
        layanan={<Reaktif />}
        content={
          <>
            <p className="mb-3">
              Layanan ini berfokus pada deteksi, analisis, dan respons
              terhadap insiden keamanan yang telah terjadi. Unila-CSIRT
              memiliki beberapa layanan Reaktif:
            </p>
            <ol className="list-disc list-outside ml-6 space-y-1">
              <li>
                Incident Handling & Response (Penanganan & Respons Insiden):
                Menanggapi insiden keamanan untuk mengurangi dampak serangan.
              </li>
              <li>
                Forensic Analysis (Analisis Forensik): Menyelidiki insiden
                untuk mengidentifikasi penyebab dan pelaku serangan.
              </li>
              <li>
                Malware Analysis: Menganalisis malware untuk memahami
                dampaknya dan cara mengatasinya.
              </li>
              <li>
                Containment & Mitigation: Mengisolasi sistem yang terinfeksi
                dan memulihkan operasional secepat mungkin.
              </li>
              <li>
                Incident Notification & Reporting: Memberikan laporan kepada
                pihak terkait tentang insiden keamanan.
              </li>
            </ol>
          </>
        }
      />

      <TextBoxWidth
        title={
          "Layanan Pengelolaan Keamanan Siber (Security Management Services"
        }
        layanan={<CyberSec />}
        content={
          <>
            <p className="mb-3">
              Layanan ini bertujuan untuk meningkatkan postur keamanan
              organisasi secara keseluruhan. Unila-CSIRT memiliki beberapa
              layanan Pengelolaan Keamanan Siber:
            </p>
            <ol className="list-disc list-outside ml-6 space-y-1">
              <li>
                Security Policy Development (Pengembangan Kebijakan Keamanan):
                Membantu organisasi merancang dan memperbarui kebijakan
                keamanan siber.
              </li>
              <li>
                Vulnerability Management (Manajemen Kerentanan):
                Mengidentifikasi, mengevaluasi, dan menangani kerentanan dalam
                sistem IT
              </li>
            </ol>
          </>
        }
      />
    </div>
  </ContentVerticalPadding>;
}

function Reaktif() {
  return (
    <div
      className="w-full h-fit rounded-xl flex flex-col items-center justify-between py-5 text-white"
      style={{
        background:
          "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
      }}
    >
      <ReactiveIcon className="w-16 h-16 mb-5" />
      <div className="text-center font-semibold">
        Layanan Reaktif
        <br />
        (Reactive Services)
      </div>
    </div>
  );
}

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