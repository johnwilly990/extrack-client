import { useState } from "react";
import SecondarySideNavBar from "../NavBar/SecondarySideNavBar";

const ReportsInfo = ({
  currentPage,
  currentMonth,
  setCurrentMonth,
  restOfMonths,
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
      <section></section>
    </>
  );
};

export default ReportsInfo;
