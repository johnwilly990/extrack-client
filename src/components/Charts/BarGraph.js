import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = ({ userData }) => {
  const fundsPercent = (fund, income) => {
    return (fund / income) * 100;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "User Funds Breakdown (X-Axis is category, Y-Axis is your income where 0 is 0% and 100 is 100%)",
      },
    },
    scales: {
      y: {
        max: 100,
      },
    },
  };

  const labels = [
    "Savings",
    "Investments",
    "Monthly Payments",
    "Flexible Expenses",
    "Remaing Income",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "% of Income",
        data: [
          fundsPercent(userData.saving_amount, userData.income_amount),
          fundsPercent(userData.investment_amount, userData.income_amount),
          fundsPercent(userData.recurring_amount, userData.income_amount),
          fundsPercent(
            userData.flexible_expense_amount,
            userData.income_amount
          ),
          fundsPercent(userData.budget_amount, userData.income_amount),
        ],
        backgroundColor: [
          "rgba(47, 144, 98, 0.75)",
          "#9BDEBE",
          "rgba(155, 222, 190, 0.25)",
          "rgba(47, 144, 98, 0.5)",
          "rgba(155, 222, 190, 0.5)",
        ],
        borderColor: [
          "rgba(47, 144, 98, 0.75)",
          "#9BDEBE",
          "rgba(155, 222, 190, 0.25)",
          "rgba(47, 144, 98, 0.5)",
          "rgba(155, 222, 190, 0.5)",
        ],
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} height={"300"} />
    </>
  );
};

export default BarGraph;
