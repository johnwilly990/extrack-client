import info from "../assets/icons/info.svg";

const RemainingBalance = ({ userData, setInfoShow, currentPage }) => {
  return (
    <>
      <h3 className="flex text-xl relative mb-4 md:mr-4 md:text-2xl">
        Remaining income for{" "}
        {new Date().toLocaleString("default", { month: "long" })}
        {currentPage === "overview" && currentPage === "reports" ? (
          <img
            src={info}
            alt="info"
            onMouseOver={() => setInfoShow((prev) => !prev)}
            className="w-[12px] h-[12px]"
          />
        ) : (
          ""
        )}
        :
      </h3>
      <div className="flex bg-balance text-xl rounded-full mb-6">
        <p className="px-[14px] py-[6px] font-bold">
          ${userData.budget_amount?.toLocaleString("en-US")}
        </p>
      </div>
    </>
  );
};

export default RemainingBalance;
