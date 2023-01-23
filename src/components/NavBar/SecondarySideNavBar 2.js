import ExpenseMonthSelect from "../Expenses/ExpensesMonthSelect";
import ExpenseCategoryHeadings from "../Expenses/ExpenseCategoryHeadings";
import { expensesCategoryValues, reportsCategoryValues } from "../../constants";

const SecondarySideNavBar = ({
  setCurrentMonth,
  currentMonth,
  restOfMonths,
  currentCategory,
  setCurrentCategory,
  currentReport,
  setCurrentReport,
  currentPage,
}) => {
  return (
    <nav
      className={`hidden bg-babyGreen lg:block lg:w-[20%] lg:py-8 ${
        currentPage === "reports" ? "sm:block sm:py-4" : ""
      }`}
    >
      {currentPage === "reports" ? (
        <div className="flex items-baseline justify-between lg:justify-center px-8 lg:border-b-[1px] lg:border-onyx">
          <h2 className="text-xl text-onyx font-bold sm:mr-6">Date</h2>
          <ExpenseMonthSelect
            setCurrentMonth={setCurrentMonth}
            currentMonth={currentMonth}
            restOfMonths={restOfMonths}
            currentPage={currentPage}
            currentReport={currentReport}
          />
        </div>
      ) : (
        <ExpenseMonthSelect
          setCurrentMonth={setCurrentMonth}
          currentMonth={currentMonth}
          restOfMonths={restOfMonths}
          currentPage={currentPage}
          currentReport={currentReport}
        />
      )}
      {currentPage === "expenses" ? (
        expensesCategoryValues.map((heading, index) => (
          <ExpenseCategoryHeadings
            key={index}
            {...heading}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            currentPage={currentPage}
          />
        ))
      ) : (
        <div className="flex justify-between w-full px-8 lg:flex-col lg:px-0">
          {reportsCategoryValues.map((heading, index) => (
            <ExpenseCategoryHeadings
              key={index}
              {...heading}
              currentReport={currentReport}
              setCurrentReport={setCurrentReport}
              currentPage={currentPage}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default SecondarySideNavBar;
