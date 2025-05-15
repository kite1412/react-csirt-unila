import laporanInsidenBg from "../assets/laporanInsidenBg.png";
import binaryPng from "../assets/binary.png";
import SubmitIcon from "../assets/submitIcon.svg?react";
import { Link } from "react-router-dom";

function ReportPage() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center pt-25 px-20 bg-white h-fit">
      <h1 className="font-semibold text-black text-2xl">
        LAPORAN INSIDEN SIBER
      </h1>
      <div className="w-full flex flex-col gap-10">
        <div
          className="w-full aspect-[3.52] rounded-xl bg-center bg-cover flex flex-col gap-5 justify-center items-center px-50 text-white "
          style={{ backgroundImage: `url(${laporanInsidenBg})` }}
        >
          <p className="text-xl text-center font-semibold">
            Laporkan insiden keamanan siber yang Anda alami agar dapat
            ditindaklanjuti oleh tim CSIRT. Kami siap membantu menangani
            serangan siber, pelanggaran data, dan ancaman keamanan lainnya
            dengan cepat dan profesional.
          </p>
          <Link
            to="/laporan/form-pengaduan-insiden"
            className="py-2 px-5 rounded-xl flex justify-center gap-2"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <SubmitIcon />
            Laporkan Insiden
          </Link>
        </div>
        <div className="w-full flex justify-between gap-10 text-white">
          <div
            className="w-full rounded-xl flex flex-col gap-5"
            style={{
              background:
                "linear-gradient(230deg,rgba(19, 104, 109, 1) 0%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <span className="font-semibold p-5 border-b-2 border-white text-xl">
              Apa Itu Layanan Aduan Siber?
            </span>
            <p className="px-5">
              Layanan Aduan Siber adalah sistem pelaporan insiden keamanan siber
              yang memungkinkan pengguna untuk melaporkan berbagai ancaman
              seperti serangan phishing, peretasan akun, penyebaran malware,
              atau penyalahgunaan data. Tim CSIRT akan menganalisis laporan dan
              memberikan solusi sesuai dengan tingkat urgensi insiden.
            </p>
          </div>
          <div
            className="w-full rounded-xl flex flex-col gap-5"
            style={{
              background:
                "linear-gradient(230deg,rgba(19, 104, 109, 1) 0%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <span className="font-semibold p-5 border-b-2 border-white text-xl">
              Jenis Kerentanan
            </span>

            <o className="list-decimal px-5 pb-5">
              <li>Cross-site Scripting (XSS)</li>
              <li>Cross-site Request Forgery</li>
              <li>Server-Side Request Forgery (SSRF)</li>
              <li>SQL Injection</li>
              <li>Server-side Remote Code Execution (RCE)</li>
              <li>XML External Entity Attacks (XXE)</li>
              <li>
                Access Control Issues (Insecure Direct Object Reference issues,
                etc.)
              </li>
              <li>
                Exposed Administrative Panels that don't require login
                credentials
              </li>
            </o>
          </div>
        </div>

        <div className="shadow-sm w-full border-1 border-black rounded-xl flex flex-col">
          <span className="p-5 w-full border-b-1 border-black font-semibold text-xl">
            Prosedur Aduan Siber
          </span>
          <div className="w-full p-5 px-10 flex gap-10">
            <ol className="list-decimal space-y-5">
              <li>
                Persiapkan informasi yang diperlukan sebelum mengisi laporan,
                pastikan anda memiliki informasi berikut: Kronologi kejadian
                secara rinci bukti pendukung (screenshot, email, log, atau file
                terkait) tanggal dan waktu kejadian serta dampak yang
                ditimbulkan.
              </li>
              <li>
                Isi formulir laporan klik tombol "Laporkan Insiden" dan isi
                formulir dengan lengkap. Pastikan data yang diberikan akurat
                agar tim CSIRT Unila dapat menindaklanjuti laporan dengan
                efektif.
              </li>
              <li>
                Verifikasi & analisis oleh tim CSIRT Unila Setelah laporan
                masuk, tim kami akan melakukan analisis awal dan menghubungi
                anda jika diperlukan klarifikasi tambahan.
              </li>
              <li>
                Tindak lanjut & penyelesaian tim CSIRT Unila akan memberikan
                langkah mitigasi dan solusi sesuai dengan tingkat keparahan
                insiden. Anda akan mendapatkan update melalui email atau kontak
                yang telah dicantumkan.
              </li>
              <li>
                Konfirmasi & evaluasi setelah insiden ditangani, kami akan
                meminta konfirmasi dari pelapor serta memberikan rekomendasi
                keamanan untuk mencegah kejadian serupa di masa mendatang.
              </li>
            </ol>
            <div className="flex flex-col justify-between">
              <img
                src={binaryPng}
                alt=""
                className=""
              />
              <Link
                to="/laporan/form-pengaduan-insiden"
                className="py-2 px-5 rounded-xl flex justify-center gap-2 text-white"
                style={{
                  background:
                    "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
                }}
              >
                <SubmitIcon />
                Laporkan Insiden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
