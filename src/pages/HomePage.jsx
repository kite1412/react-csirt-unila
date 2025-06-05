import ilustration1 from "../assets/ilustration1.png";
import { Link } from "react-router-dom";
import ProactiveIcon from "../assets/proactiveIcon.svg?react";
import ReactiveIcon from "../assets/reactiveIcon.svg?react";
import CyberIcon from "../assets/cyberIcon.svg?react";
import facultyData from "../mocks/facultyData";
import incidentData from "../mocks/incidentData";
import unilaSitesData from "../mocks/unilaSitesData";
import LogoUnila from "../assets/Logo_UnivLampung.svg?react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Marquee from "react-fast-marquee";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function HomePage() {
  return (
    <div className=" flex flex-col bg-white gap-50 pb-50">
      <div
        className="h-fit flex pt-25 pb-50 px-20 bg-[#081423] justify-between"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
        }}
      >
        <div className="text-white flex flex-col justify-around">
          <div className="gradient-text">
            <h1 className="text-4xl font-semibold">
              COMPUTER SECURITY INCIDENT RESPONSE TEAM
            </h1>
            <h2 className="text-3xl font-semibold">Universitas Lampung</h2>
          </div>
          <p className="w-2xl h-fit ">
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
            className="border-1 border-gray-100 w-fit h-fit py-2 px-8 rounded-xl font-semibold"
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

      <div
        className="w-full h-fit flex flex-col items-center px-20 gap-10 text-white"
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-black text-2xl">LAYANAN KAMI</h1>
        <div className="w-full flex justify-between gap-10">
          <div
            className=" w-full h-fit  rounded-xl flex flex-col items-center justify-between py-5"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <ProactiveIcon />
            <div className="text-center font-semibold">
              Layanan Proaktif
              <br />
              (Proactive Services)
            </div>
          </div>
          <div
            className=" w-full h-fit  rounded-xl flex flex-col items-center justify-between py-5"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <ReactiveIcon />
            <div className="text-center font-semibold">
              Layanan Reaktif
              <br />
              (Reactive Services)
            </div>
          </div>
          <div
            className=" w-full h-fit  rounded-xl flex flex-col items-center justify-between py-5"
            style={{
              background:
                "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
            }}
          >
            <CyberIcon />
            <div className="text-center font-semibold">
              Pengelolaan Keamanan Siber
              <br />
              (Security Management Services)
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-fit flex flex-col items-center px-20 gap-10 "
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-black text-2xl">
          STATISTIK KEAMANAN WEBSITE UNILA
        </h1>
        <div className="flex gap-10 w-full justify-center">
          <CaseCountCard className="" />
          <CaseChart className="" />
        </div>
      </div>

      <div
        className="w-full h-fit flex flex-col items-center px-20 gap-10 "
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-black text-2xl">
          KASUS WEBSITE FAKULTAS
        </h1>
        <FacultyWebCaseCards facultyData={facultyData} />
      </div>

      <div
        className="w-full h-fit flex flex-col items-center px-20 gap-10"
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-black text-2xl">LOG INSIDEN</h1>
        <IncidentLog incidents={incidentData} />
      </div>

      <div
        className="w-full h-fit flex flex-col items-center px-20 gap-10"
        data-aos="fade-up"
      >
        <h1 className="font-semibold text-black text-2xl">
          WEBSITE DI UNIVERSITAS LAMPUNG
        </h1>
        <UnilaWebsites unilaSites={unilaSitesData} />
      </div>
    </div>
  );
}

export default HomePage;

function UnilaWebsites({ unilaSites }) {
  return (
    <div className="grid grid-cols-3 place-items-center p-10 text-white w-full gap-15 rounded-xl shadow-sm shadow-black/30">
      {unilaSites.map((unilaSite) => (
        <a
          key={unilaSite.name}
          href={unilaSite.url}
          target="_blank"
          className="w-full h-20 rounded-xl shadow-sm shadow-black/100 flex justify-between items-center px-20"
          style={{
            background:
              "linear-gradient(270deg,rgba(19, 104, 109, 1) 30%, rgba(8, 20, 35, 1) 100%)",
          }}
        >
          <span className="font-semibold text-xl">
            {unilaSite.name.toUpperCase()}
          </span>
          <LogoUnila className="w-15 h-auto" />
        </a>
      ))}
    </div>
  );
}

function CaseChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sept",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Konten Positif",
        data: [86, 85, 86, 87, 86, 86, 86, 85, 86, 87, 86, 86],
        backgroundColor: "#283747", // Warna untuk konten positif (dark teal)
      },
      {
        label: "Konten Negatif",
        data: [64, 63, 64, 63, 64, 63, 64, 63, 64, 63, 64, 63],
        backgroundColor: "#17A589", // Warna untuk konten negatif (teal)
      },
      {
        label: "Keamanan",
        data: [94, 93, 94, 94, 94, 94, 94, 93, 94, 94, 94, 94],
        backgroundColor: "#081423", // Warna untuk keamanan (dark blue)
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false, // Anda bisa set true dan memberikan teks judul jika perlu
        text: "Tren Keamanan dan Sentimen Bulanan",
      },
      legend: {
        display: false,
        position: "right",
        labels: {
          color: "#081423",
          font: { size: 14 },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Sesuai dengan skala pada gambar
        ticks: {
          stepSize: 20, // Sesuai dengan langkah skala pada gambar
          color: "#081423", // Warna teks sumbu Y
        },
        grid: {
          borderColor: "rgba(0, 0, 0, 0.1)", // Warna garis grid sumbu Y
        },
      },
      x: {
        ticks: {
          color: "#081423", // Warna teks sumbu X
        },
        grid: {
          display: false, // Hilangkan garis grid sumbu X jika tidak diperlukan
        },
      },
    },
  };

  return (
    <div className="w-fit flex gap-5 px-5 rounded-xl shadow-sm shadow-black/30 justify-center items-center">
      <div className="w-2xl flex h-50">
        <Bar
          data={data}
          options={options}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 w-35">
        <div className="flex items-center gap-2">
          <span className="w-6 h-3 bg-[#283747] inline-block " />
          <span className="text-sm text-[#081423]">Konten Positif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-3 bg-[#17A589] inline-block " />
          <span className="text-sm text-[#081423]">Konten Negatif</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-3 bg-[#081423] inline-block " />
          <span className="text-sm text-[#081423]">Keamanan</span>
        </div>
      </div>
    </div>
  );
}

function CaseCountCard() {
  const data = {
    // labels: ["Kasus Aktif", "Kasus Selesai"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#081423", "#1DBBB7"],
        borderWidth: 1,
      },
    ],
  };

  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const options = {
    cutout: "65%",
    plugins: {
      legend: {
        position: "center",
        labels: {
          color: "#081423",
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="w-full h-fit py-5 px-20 flex flex-col justify-center items-center gap-2 rounded-xl shadow-sm shadow-black/30">
      <h1 className="font-semibold">Jumlah Kasus</h1>
      <div className="w-40 h-auto relative flex justify-center items-center">
        <div className="absolute font-semibold">{total}</div>

        <Doughnut
          data={data}
          options={options}
          key={JSON.stringify(data)}
        />
      </div>
    </div>
  );
}

function FacultyWebCaseCards({ facultyData }) {
  return (
    <div className="grid grid-cols-4 gap-10 w-full rounded-xl shadow-sm shadow-black/30 p-10 place-items-center ">
      {facultyData.map((item, index) => (
        <FacultyWebCaseCard
          key={index}
          facultyName={item.facultyName}
          data1={item.data1}
          data2={item.data2}
          colors={item.colors}
        />
      ))}
    </div>
  );
}

function FacultyWebCaseCard({ facultyName, data1, data2, colors }) {
  const data = {
    // labels: ["Kasus Aktif", "Kasus Selesai"],
    datasets: [
      {
        data: [data1, data2],
        backgroundColor: ["#FFFFFF", "#D3D3D3"],
        borderWidth: 0,
      },
    ],
  };

  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "#081423",
          font: { size: 14 },
        },
      },
    },
  };

  const bgColorMap = {
    "blue-700": "bg-blue-700",
    "red-700": "bg-red-700",
    "gray-500": "bg-gray-500",
    "green-700": "bg-green-700",
    "orange-500": "bg-orange-500",
    "green-600": "bg-green-600",
    "cyan-500": "bg-cyan-500",
    "purple-500": "bg-purple-500",
  };

  return (
    <div
      className={`flex gap-2 ${bgColorMap[colors] || "bg-gray-700"} rounded-xl justify-between items-center w-3xs px-10 py-5 h-25 shadow-sm shadow-black/30`}
    >
      <span className="font-semibold w-20 text-white">{facultyName}</span>
      <div className="w-15 relative flex justify-center items-center">
        <div className="absolute font-semibold text-xs text-white">{total}</div>
        <Doughnut
          data={data}
          options={options}
          key={JSON.stringify(data)}
        />
      </div>
    </div>
  );
}

function IncidentLog({ incidents }) {
  return (
    <div className=" rounded-xl shadow-sm shadow-black/30 w-full p-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#081423]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              No
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Tanggal & Jam
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Nama Website
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Domain
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Jenis Insiden
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {incidents.map((incident, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.dateTime}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.websiteName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.domain}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {incident.incidentType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex items-center">
                  <span
                    className={`inline-block w-3 h-3 rounded-full mr-2 ${
                      incident.status.toLowerCase() === "baru"
                        ? "bg-red-500"
                        : incident.status.toLowerCase() === "dalam proses"
                          ? "bg-yellow-500"
                          : incident.status.toLowerCase() === "selesai"
                            ? "bg-green-500"
                            : "bg-gray-400"
                    }`}
                  ></span>
                  <span className="text-gray-900">{incident.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
