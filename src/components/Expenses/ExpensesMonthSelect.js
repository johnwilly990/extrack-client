import { useState } from "react";

const ExpenseMonthSelect = ({ setCurrentMonth, monthAtm, restOfMonths }) => {
  return (
    <>
      <div className="flex justify-center py-4 md:mr-16">
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
    </>
  );
};

export default ExpenseMonthSelect;
