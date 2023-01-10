import { useState } from "react";
import axios from "axios";
import BtnCtaAdd from "../BtnCta/BtnCtaAdd";
import DashboardDescription from "./OverviewDescription";
import DashboardVisuals from "./OverviewVisuals";

const initialValues = {
  income_amount: "",
};

const URL = process.env.REACT_APP_URL;

const OverviewInfo = ({
  userData,
  authToken,
  counter,
  setCounter,
  currentPage,
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

  return (
    <section className="flex flex-col justify-center px-6 py-8 lg:w-full md:px-[48px]">
      <DashboardDescription userData={userData} currentPage={currentPage} />
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
};

export default OverviewInfo;
