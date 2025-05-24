import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function CaseCountCard({ className }) {
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

export default CaseCountCard;
