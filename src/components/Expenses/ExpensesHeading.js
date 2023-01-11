const ExpensesHeading = ({ heading }) => {
  return (
    <p
      className={`w-1/4 text-onyx font-bold md:w-1/4 ${
        heading === "Date" ? "hidden md:block" : ""
      }`}
    >
      {heading}
    </p>
  );
};

export default ExpensesHeading;
