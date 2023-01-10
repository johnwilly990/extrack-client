import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BtnCtaAdd from "../BtnCta/BtnCtaAdd";
import DashboardDescription from "./DashboardDescription";
import DashboardValueCard from "./DashboardValueCard";
import DashboardVisuals from "./DashboardVisuals";

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
        <DashboardDescription userData={userData} />
        <div className="flex flex-col justify-center items-center mb-14">
          <BtnCtaAdd
            text="Income"
            onClick={setIncome}
            income={income}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="lg:flex lg:justify-between">
          <DashboardVisuals userData={userData} />
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
