import DashboardValueCard from "./DashboardValueCard";
import { dashboardValues } from "../../constants";
import PieChart from "../Charts/PieChart";

const DashboardVisuals = ({ userData }) => {
  return (
    <>
      <div className="flex flex-wrap justify-between lg:w-1/2">
        {dashboardValues.map((value, index) => (
          <DashboardValueCard key={index} {...value} userData={userData} />
        ))}
      </div>
      <div className="hidden lg:w-1/2 lg:h-[370px] lg:flex lg:justify-end">
        <PieChart userData={userData} />
      </div>
    </>
  );
};

export default DashboardVisuals;
