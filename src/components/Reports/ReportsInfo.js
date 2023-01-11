import { useState } from "react";
import BarGraph from "../Charts/BarGraph";
import PieChart from "../Charts/PieChart";
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
            <div className="flex flex-col items-center justify-center w-full h-[400px] mb-16">
              <h2 className="text-xl text-onyx font-bold">Bar Graph</h2>
              <BarGraph userData={userData} />
            </div>
            <div className="flex flex-col items-center justify-center w-[400px]">
              <h2 className="text-xl text-onyx font-bold">Pie Chart</h2>
              <PieChart userData={userData} />
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default ReportsInfo;
