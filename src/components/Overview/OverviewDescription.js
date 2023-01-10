import { useState } from "react";
import RemainingBalance from "../RemainingBalance";

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
        <RemainingBalance userData={userData} setInfoShow={setInfoShow} />
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
