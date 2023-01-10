import { useState } from "react";
import info from "../../assets/icons/info.svg";

const OverviewDescription = ({ userData }) => {
  const [infoShow, setInfoShow] = useState(false);
  return (
    <>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">
          Welcome back, {userData.first_name} {userData.last_name}!
        </h2>
        <p className="text-sm text-onyx mb-12">
          Displayed is your breakdown of your balance for the current month as
          well as the alloted values for each category of expense/asset
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-baseline">
        <h3 className="flex text-xl relative mb-4 md:mr-6">
          Remaining income for{" "}
          {new Date().toLocaleString("default", { month: "long" })}
          <img
            src={info}
            alt="info"
            onMouseOver={() => setInfoShow((prev) => !prev)}
            className="w-[12px] h-[12px]"
          />
          :
        </h3>
        <div className="flex bg-balance text-xl rounded-full mb-6">
          <p className="px-[14px] py-[6px] font-bold">
            ${userData.budget_amount?.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      {infoShow && (
        <p className="text-sm text-onyx mb-12">
          Remaining income displayed is your total remaining after all
          deductions have been made from your income <br /> Remaining = (income
          - flexible expenses - monthly payments - savings - investments)
        </p>
      )}
    </>
  );
};

export default OverviewDescription;
