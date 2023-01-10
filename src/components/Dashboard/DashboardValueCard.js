const DashboardValueCard = ({ heading, userData }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-[45%] h-[120px] mb-6 gap-3 rounded py-4 shadow-xl md:h-[200px] lg:h-[180px] ${
        heading === "Monthly Payments" ? "bg-investments" : ""
      } ${heading === "Flexible Expenses" ? "bg-expenses" : ""} ${
        heading === "Savings" ? "bg-savings" : ""
      } ${heading === "Investments" ? "bg-investmentGreen" : ""}`}
    >
      <h3 className="md:text-lg">{heading}</h3>
      {heading === "Monthly Payments" && (
        <p className="md:text-lg">
          ${userData.recurring_amount?.toLocaleString("en-US")}
        </p>
      )}
      {heading === "Flexible Expenses" && (
        <p className="md:text-lg">
          ${userData.flexible_expense_amount?.toLocaleString("en-US")}
        </p>
      )}
      {heading === "Savings" && (
        <p className="md:text-lg">
          ${userData.saving_amount?.toLocaleString("en-US")}
        </p>
      )}
      {heading === "Investments" && (
        <p className="md:text-lg">
          ${userData.investment_amount?.toLocaleString("en-US")}
        </p>
      )}
    </div>
  );
};

export default DashboardValueCard;
