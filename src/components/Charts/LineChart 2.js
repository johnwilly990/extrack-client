import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { months } from "../../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ userData }) => {
  const monthlyRemaining = [
    userData,
    9000,
    5500,
    2300,
    4600,
    8700,
    6300,
    950,
    6800,
    10000,
    8800,
    4500,
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        max: 50000,
      },
    },
  };

  const labels = months;

  const data = {
    labels,
    datasets: [
      {
        label: "Remaining income for each month",
        data: monthlyRemaining,
        borderColor: "#2F9062",
        backgroundColor: "#2F9062",
      },
    ],
  };

  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChart;
