import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ userData }) => {
  const fundsPercent = (fund, income) => {
    return (fund / income) * 100;
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "User Funds breakdown",
      },
    },
  };

  const data = {
    labels: [
      "Savings",
      "Investments",
      "Monthly Payments",
      "Flexible Expenses",
      "Budget",
    ],
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
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Pie options={options} data={data} />
    </>
  );
};

export default PieChart;
