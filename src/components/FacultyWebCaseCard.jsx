import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

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

export default FacultyWebCaseCard;
