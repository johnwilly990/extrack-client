import React from "react";

const ExpensesHeading = ({ heading }) => {
  return (
    <p
      className={`w-1/3 text-onyx font-bold md:w-1/5 ${
        heading === "Date" ? "hidden md:block" : ""
      }`}
    >
      {heading}
    </p>
  );
};

export default ExpensesHeading;
