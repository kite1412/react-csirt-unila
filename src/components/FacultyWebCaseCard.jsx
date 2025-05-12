import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function FacultyWebCaseCard({ facultyName, data1, data2 }) {
  const data = {
    // labels: ["Kasus Aktif", "Kasus Selesai"],
    datasets: [
      {
        data: [data1, data2],
        backgroundColor: ["#081423", "#1DBBB7"],
        borderWidth: 1,
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

  return (
    <div className="flex gap-2 border-1 border-red-500 rounded-xl justify-between items-center w-3xs px-10 py-5 h-25">
      <span className="font-semibold w-20">{facultyName}</span>
      <div className="w-15">
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
