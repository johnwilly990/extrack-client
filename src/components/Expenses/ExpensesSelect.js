import { useState } from "react";
import { dashboardValues } from "../../constants";

const ExpensesSelect = ({
  setCurrentCategory,
  setCurrentMonth,
  monthAtm,
  restOfMonths,
}) => {
  return (
    <>
      <div className="flex justify-center py-4">
        <select
          onChange={(e) => setCurrentMonth(e.target.value)}
          className="bg-babyGreen rounded"
        >
          <option value={monthAtm}>
            {monthAtm} {new Date().getFullYear()}
          </option>
          {restOfMonths.map((month, index) => (
            <>
              <option
                key={index}
                value={month}
                className="text-xl text-bold text-onyx"
              >
                {month} {new Date().getFullYear()}
              </option>
            </>
          ))}
        </select>
      </div>
      <div
        onChange={(e) => setCurrentCategory(e.target.value)}
        className="py-4 md:hidden"
      >
        <select className="bg-babyGreen rounded outline-forestGreen">
          {dashboardValues.map((category, index) => (
            <option key={index} value={category.value}>
              {category.heading}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpensesSelect;
