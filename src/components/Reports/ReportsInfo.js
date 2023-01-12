import { useState } from "react";
import BarGraph from "../Charts/BarGraph";
import PieChart from "../Charts/PieChart";
import LineChart from "../Charts/LineChart";
import SecondarySideNavBar from "../NavBar/SecondarySideNavBar";

const ReportsInfo = ({
  currentPage,
  currentMonth,
  setCurrentMonth,
  restOfMonths,
  userData,
}) => {
  const [currentReport, setCurrentReport] = useState("spending");
  return (
    <>
      <SecondarySideNavBar
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        restOfMonths={restOfMonths}
        currentReport={currentReport}
        setCurrentReport={setCurrentReport}
        currentPage={currentPage}
      />
      <section className="lg:w-[60%] lg:py-8 lg:px-16">
        {currentReport === "spending" ? (
          <div className="flex flex-col items-center w-full px-4 py-14 md:p-8 lg:p-0">
            <div className="flex flex-col justify-between items-center w-full h-[400px] mb-[80px] md:mb-[120px]">
              <div className="flex flex-col items-center">
                <h2 className="text-xl text-onyx font-bold mb-6 md:mb-8">
                  Bar Graph
                </h2>
                <p className="text-sm text-onyx text-center">
                  X-Axis is the category for each expense/asset. Y-Axis is the
                  percentage based off your income
                </p>
              </div>
              <BarGraph userData={userData} />
            </div>
            <div className="flex flex-col-reverse w-full md:items-center lg:justify-between">
              <div className="flex justify-center w-full md:h-[400px] md:w-[400px]">
                <PieChart userData={userData} />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-xl text-onyx font-bold mb-6 md:mb-8">
                  Pie Chart
                </h2>
                <p className="text-sm text-onyx text-center mb-6">
                  Each colour represents a different expense/asset. Hover your
                  cursor over each category to see it's distribution percentage
                  of your total income
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center px-4 py-14 h-[100vh]">
            <h2 className="text-xl text-onyx font-bold mb-6">
              Month to Month for {new Date().getFullYear()}
            </h2>
            <p className="text-onyx text-center mb-16">
              Comparison chart so that you can see how financially responsible
              you've been throughout the year
            </p>
            <LineChart userData={userData.budget_amount} />
          </div>
        )}
      </section>
    </>
  );
};

export default ReportsInfo;
