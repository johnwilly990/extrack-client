import OverviewValueCard from "./OverviewValueCard";
import { expensesCategoryValues } from "../../constants";
import PieChart from "../Charts/PieChart";

const OverviewVisuals = ({ userData }) => {
  return (
    <>
      <div className="flex flex-wrap justify-between lg:w-1/2">
        {expensesCategoryValues.map((value, index) => (
          <OverviewValueCard key={index} {...value} userData={userData} />
        ))}
      </div>
      <div className="hidden lg:w-1/2 lg:h-[370px] lg:flex lg:justify-end">
        <PieChart userData={userData} />
      </div>
    </>
  );
};

export default OverviewVisuals;
