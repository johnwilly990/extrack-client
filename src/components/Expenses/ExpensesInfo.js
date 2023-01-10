import { useState } from "react";
import RemainingBalance from "../RemainingBalance";
import ExpensesSelect from "./ExpensesSelect";
import { months } from "../../constants";
import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const ExpensesInfo = ({ userData }) => {
  const date = new Date();
  const monthAtm = months[date.getMonth()];
  const restOfMonths = months.filter((current) => current !== monthAtm);

  const [currentCategory, setCurrentCategory] = useState("monthly");
  const [currentMonth, setCurrentMonth] = useState(monthAtm);

  return (
    <section>
      <div className="flex flex-col justify-center items-center px-[48px] py-14">
        <RemainingBalance userData={userData} />
      </div>
      <div className="flex flex-col items-center bg-babyGreen mb-8 md:hidden">
        <ExpensesSelect
          setCurrentCategory={setCurrentCategory}
          setCurrentMonth={setCurrentMonth}
          monthAtm={monthAtm}
          restOfMonths={restOfMonths}
        />
      </div>
    </section>
  );
};

export default ExpensesInfo;
