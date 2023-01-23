const ExpenseMonthSelect = ({
  currentMonth,
  restOfMonths,
  currentReport,
  currentPage,
}) => {
  const year = new Date().getFullYear();
  const years = Array.from(new Array(7), (val, index) => index + year);
  return (
    <>
      <div
        className={`flex justify-center py-4 md:mr-16 lg:mr-0 lg:pb-8 lg:border-b-[1px] lg:border-onyx lg:text-onyx lg:px-4 lg:w-full ${
          currentPage === "reports" ? "lg:border-none md:mr-0" : ""
        }`}
      >
        <select className="bg-babyGreen rounded lg:font-bold">
          {currentPage === "reports" &&
          currentReport === "month-to-month" ? undefined : (
            <option className="text-xl text-bold text-onyx">
              {currentMonth} {new Date().getFullYear()}
            </option>
          )}
          {currentPage === "reports" && currentReport === "month-to-month"
            ? years.map((year, index) => (
                <option
                  key={index}
                  value={year}
                  className="text-xl text-bold text-onyx"
                >
                  {year}
                </option>
              ))
            : restOfMonths.map((month, index) => (
                <option
                  key={index}
                  value={month}
                  className="text-xl text-bold text-onyx"
                >
                  {month} {new Date().getFullYear()}
                </option>
              ))}
        </select>
      </div>
    </>
  );
};

export default ExpenseMonthSelect;
