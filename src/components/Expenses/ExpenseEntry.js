import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const ExpenseEntry = () => {
  return (
    <div className="flex justify-between md:justify-start md:border-b-[1px] md:border-investmentGreen md:pb-2 md:mb-2">
      <p className="w-1/3 text-onyx md:w-1/5">Rent</p>
      <p className="w-1/3 text-onyx md:w-1/5">Rent</p>
      <p className="w-1/3 text-onyx md:w-1/5">$1000</p>
      <p className="w-[50%] hidden md:w-[33%] md:block">
        {new Date().getMonth()}
      </p>
      <div className="hidden md:flex">
        <img src={edit} alt="edit" className="w-[16px] h-[16px] mr-4" />
        <img src={deleteIcon} alt="delete" className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
};

export default ExpenseEntry;
