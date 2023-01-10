import { useState } from "react";
import RemainingBalance from "../RemainingBalance";
import ExpenseMonthSelect from "./ExpensesMonthSelect";
import ExpensesCategorySelect from "./ExpensesCategorySelect";
import ExpenseCategoryHeadings from "./ExpenseCategoryHeadings";
import ExpensesHeading from "./ExpensesHeading";
import BtnCtaAddEntry from "../BtnCta/BtnCtaAddEntry";
import SecondarySideNavBar from "../NavBar/SecondarySideNavBar";
import { months, expensesHeadings, dashboardValues } from "../../constants";
import ExpenseEntry from "./ExpenseEntry";
import ExpenseEntryMobile from "./ExpenseEntryMobile";

const ExpensesInfo = ({ userData }) => {
  const date = new Date();
  const monthAtm = months[date.getMonth()];
  const restOfMonths = months.filter((current) => current !== monthAtm);

  const [currentCategory, setCurrentCategory] = useState("monthly");
  const [currentMonth, setCurrentMonth] = useState(monthAtm);

  return (
    <>
      <SecondarySideNavBar
        setCurrentMonth={setCurrentMonth}
        monthAtm={monthAtm}
        restOfMonths={restOfMonths}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <section className="lg:w-[60%] lg:p-[64px]">
        <div className="flex flex-col justify-center items-center px-[48px] py-14 md:flex-row md:items-baseline">
          <RemainingBalance userData={userData} />
        </div>
        <div className="flex flex-col items-center bg-babyGreen mb-8 md:flex-row md:px-8 lg:hidden">
          <ExpenseMonthSelect
            setCurrentMonth={setCurrentMonth}
            monthAtm={monthAtm}
            restOfMonths={restOfMonths}
          />
          <ExpensesCategorySelect setCurrentCategory={setCurrentCategory} />
          <div className="md:flex md:justify-between md:w-full">
            {dashboardValues.map((heading, index) => (
              <ExpenseCategoryHeadings
                key={index}
                {...heading}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:justify-end md:px-8 md:w-full md:mb-4">
          <BtnCtaAddEntry text="Entry" />
        </div>
        <div className="flex justify-between bg-investmentGreen px-4 py-2 md:justify-start md:px-8">
          {expensesHeadings.map((heading, index) => (
            <ExpensesHeading key={index} heading={heading} />
          ))}
        </div>
        <div className="bg-babyGreen px-4 py-2 md:px-8">
          <ExpenseEntry />
        </div>
        <div className="bg-investments px-4 py-2 md:hidden">
          <ExpenseEntryMobile />
        </div>
      </section>
    </>
  );
};

export default ExpensesInfo;
