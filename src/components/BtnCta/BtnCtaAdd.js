import add from "../../assets/icons/add.svg";

const BtnCtaAdd = ({
  text,
  onClick,
  income,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <>
      <div
        onClick={() => onClick((prevCheck) => !prevCheck)}
        className="flex items-center w-[100px] cursor-pointer mb:16"
      >
        <img src={add} alt="add" className="w-[12px] h-[12px] mr-2" />
        <p className="text-sm text-green">Add {text}</p>
      </div>
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
    </>
  );
};

export default BtnCtaAdd;
