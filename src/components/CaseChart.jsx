import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
    <div className="w-fit flex gap-5 px-10 rounded-xl shadow-sm shadow-black/30 justify-center items-center">
      <div className="w-2xl flex h-50">
        <Bar
          data={data}
          options={options}
        />
      </div>
      <div className="flex flex-col justify-center gap-4 ">
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

export default CaseChart;
