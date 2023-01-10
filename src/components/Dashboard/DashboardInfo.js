import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DashboardValueCard from "./DashboardValueCard";
import { dashboardValues } from "../../constants";
import BtnCtaAdd from "../BtnCta/BtnCtaAdd";
import PieChart from "../Charts/PieChart";
import info from "../../assets/icons/info.svg";

const initialValues = {
  income_amount: "",
};

const URL = process.env.REACT_APP_URL;

const DashboardInfo = ({
  userData,
  authToken,
  counter,
  setCounter,
  failedAuth,
}) => {
  const [income, setIncome] = useState(false);
  const [input, setInput] = useState(initialValues);
  const [infoShow, setInfoShow] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: Number(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${URL}profile`,
        {
          income_amount: input.income_amount,
        },
        { headers: { Authorization: `Bearer: ${authToken}` } }
      );
      setIncome(false);
      setCounter(counter + 1);
    } catch (err) {
      console.log(err);
    }
  };

  if (failedAuth) {
    return (
      <main className="flex flex-col justify-center items-center h-[100vh] w-full">
        <p className="text-lg text-green">
          You must be logged in to see this page.
        </p>
        <Link
          to="/login"
          className="flex justify-center items-center mt-3 mb-6 bg-green w-[200px] h-[40px] rounded uppercase hover:bg-forestGreen"
        >
          <p className="text-white">Go To Login</p>
        </Link>
      </main>
    );
  } else {
    return (
      <section className="flex flex-col justify-center px-6 py-8 lg:w-full md:px-[48px]">
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
            deductions have been made from your income <br /> Remaining =
            (income - flexible expenses - monthly payments - savings -
            investments)
          </p>
        )}
        <div className="flex flex-col justify-center items-center mb-14">
          <BtnCtaAdd text="Income" onClick={setIncome} />
          {income && (
            <form onSubmit={handleSubmit} className="flex justify-center mt-6">
              <input
                type="number"
                name="income_amount"
                placeholder="Enter Income"
                value={income?.income_amount}
                onChange={handleInputChange}
                className="outline-forestGreen border-2 border-green solid rounded p-[4px] mr-4"
              />
              <button className="bg-green text-white p-[6px] rounded hover:bg-forestGreen">
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="lg:flex lg:justify-between">
          <div className="flex flex-wrap justify-between lg:w-1/2">
            {dashboardValues.map((value, index) => (
              <DashboardValueCard key={index} {...value} userData={userData} />
            ))}
          </div>
          <div className="hidden lg:w-1/2 lg:h-[370px] lg:flex lg:justify-end">
            <PieChart userData={userData} />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 lg:hidden">
          <p className="text-sm text-green underline mb-6">See Expenses</p>
          <p className="text-sm text-green underline">See Reports</p>
        </div>
      </section>
    );
  }
};

export default DashboardInfo;
