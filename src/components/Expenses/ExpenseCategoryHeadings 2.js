import arrow from "../../assets/icons/arrow.svg";

const ExpenseCategoryHeadings = ({
  heading,
  value,
  currentCategory,
  setCurrentCategory,
  currentReport,
  setCurrentReport,
  currentPage,
}) => {
  const reportsOrExpenses = () => {
    if (currentPage === "expenses") {
      return currentCategory;
    } else {
      return currentReport;
    }
  };

  return (
    <div
      onClick={
        currentPage === "reports"
          ? () => setCurrentReport(value)
          : () => setCurrentCategory(value)
      }
      className={`hidden md:cursor-pointer md:flex lg:mt-10 lg:justify-between lg:px-2 ${
        value === reportsOrExpenses() ? "lg:bg-selectedState" : ""
      } ${currentPage === "reports" ? "sm:block cursor-pointer" : ""}`}
    >
      <p
        className={`text-sm lg:text-md lg:mr-8 lg:text-onyx ${
          value === reportsOrExpenses() ? "font-bold underline lg:p-2" : ""
        }`}
      >
        {heading}
      </p>
      {value === reportsOrExpenses() && (
        <img src={arrow} alt="arrow" className="hidden lg:block lg:px-2" />
      )}
    </div>
  );
};

export default ExpenseCategoryHeadings;
