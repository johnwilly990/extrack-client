import ExpenseMonthSelect from "../Expenses/ExpensesMonthSelect";
import ExpenseCategoryHeadings from "../Expenses/ExpenseCategoryHeadings";
import { dashboardValues } from "../../constants";

const SecondarySideNavBar = ({
  setCurrentMonth,
  monthAtm,
  restOfMonths,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <nav className="hidden bg-babyGreen lg:block lg:w-[20%] lg:py-8">
      <ExpenseMonthSelect
        setCurrentMonth={setCurrentMonth}
        monthAtm={monthAtm}
        restOfMonths={restOfMonths}
      />
      {dashboardValues.map((heading, index) => (
        <ExpenseCategoryHeadings
          key={index}
          {...heading}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
      ))}
    </nav>
  );
};

export default SecondarySideNavBar;
