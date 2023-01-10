const ExpenseMonthSelect = ({
  setCurrentMonth,
  currentMonth,
  restOfMonths,
}) => {
  return (
    <>
      <div className="flex justify-center py-4 md:mr-16 lg:mr-0 lg:pb-8 lg:border-b-[1px] lg:border-onyx lg:text-onyx lg:px-4 lg:w-full">
        <select
          onChange={(e) => setCurrentMonth(e.target.value)}
          className="bg-babyGreen rounded lg:font-bold"
        >
          <option value={currentMonth}>
            {currentMonth} {new Date().getFullYear()}
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
