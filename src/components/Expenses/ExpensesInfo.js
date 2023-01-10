import { useState } from "react";
import RemainingBalance from "../RemainingBalance";
import ExpenseMonthSelect from "./ExpensesMonthSelect";
import ExpensesCategorySelect from "./ExpensesCategorySelect";
import ExpenseCategoryHeadings from "./ExpenseCategoryHeadings";
import BtnCtaAddEntry from "../BtnCta/BtnCtaAddEntry";
import SecondarySideNavBar from "../NavBar/SecondarySideNavBar";
import { months, dashboardValues } from "../../constants";
import GetEntries from "./Entries/GetEntries";

const ExpensesInfo = ({ userData }) => {
  const date = new Date();
  const monthAtm = months[date.getMonth()];
  const restOfMonths = months.filter((current) => current !== monthAtm);
  const [currentCategory, setCurrentCategory] = useState("recurring");
  const [currentMonth, setCurrentMonth] = useState(monthAtm);

  return (
    <>
      <SecondarySideNavBar
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        restOfMonths={restOfMonths}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <section className="lg:w-[60%] lg:py-8 lg:px-16">
        <div className="flex flex-col justify-center items-center px-[48px] py-14 md:flex-row md:items-baseline lg:py-0 lg:pb-16">
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
        <div className="hidden md:flex md:justify-end md:px-8 md:w-full md:mb-4 lg:px-0">
          <BtnCtaAddEntry text="Entry" />
        </div>
        <GetEntries currentCategory={currentCategory} />
      </section>
    </>
  );
};

export default ExpensesInfo;
