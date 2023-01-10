import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DashboardValueCard from "./DashboardValueCard";
import { dashboardValues } from "../../constants";
import BtnCtaAdd from "../BtnCta/BtnCtaAdd";

const initialValues = {
  income_amount: "",
};

const URL = process.env.REACT_APP_URL;

const DashboardInfo = () => {
  const [income, setIncome] = useState(false);
  const [input, setInput] = useState(initialValues);
  const [userData, setUserData] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [remainingIncome, setRemainingIncome] = useState(0);
  const [counter, setCounter] = useState();
  const authToken = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios.get(`${URL}profile`, {
          headers: { Authorization: `Bearer: ${authToken}` },
        });
        setUserData(user.data);
        setRemainingIncome(user.data.budget_amount);
        setFailedAuth(false);
      } catch {
        setFailedAuth(true);
      }
    };

    fetchData();
  }, [authToken, counter]);

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

  return (
    <section className="flex flex-col px-6 py-8 lg:w-[70%] md:px-[48px]">
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">
          Welcome back, {userData.first_name} {userData.last_name}!
        </h2>
        <p className="text-sm text-onyx mb-12">
          Displayed is your breakdown of your balance for the current month as
          well as the alloted values for each category of expense/asset
        </p>
        <p className="text-sm text-onyx mb-12">
          Remaining income displayed is your total remaining after all
          deductions have been made from your income <br /> Remaining = (income
          - flexible expenses - monthly payments - savings - investments)
        </p>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row md:items-baseline">
        <h3 className="text-xl relative mb-4 md:mr-6">
          Remaining income for{" "}
          {new Date().toLocaleString("default", { month: "long" })}:
        </h3>
        <div className="flex bg-balance text-xl rounded-full mb-6">
          <p className="px-[14px] py-[6px] font-bold">
            ${userData.budget_amount?.toLocaleString("en-US")}
          </p>
        </div>
      </div>
      <div className="mb-14">
        <BtnCtaAdd text="Income" onClick={setIncome} />
        {income && (
          <form onSubmit={handleSubmit} className="flex justify-center mt-6">
            <input
              type="number"
              name="income_amount"
              placeholder="Enter Income"
              value={income.income_amount}
              onChange={handleInputChange}
              className="outline-forestGreen border-2 border-green solid rounded p-[4px] mr-4"
            />
            <button className="bg-green text-white p-[6px] rounded hover:bg-forestGreen">
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="flex flex-wrap justify-between lg:w-1/2">
        {dashboardValues.map((value, index) => (
          <DashboardValueCard key={index} {...value} {...userData} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-8 lg:hidden">
        <p className="text-sm text-green underline mb-6">See Expenses</p>
        <p className="text-sm text-green underline">See Reports</p>
      </div>
    </section>
  );
};

export default DashboardInfo;
