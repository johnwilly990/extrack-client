import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const ExpenseEntryMobile = () => {
  return (
    <div className="flex justify-start items-center">
      <p className="w-1/3 text-onyx font-bold">Date</p>
      <p className="w-[50%]">{new Date().getMonth()}</p>
      <div className="flex">
        <img src={edit} alt="edit" className="w-[16px] h-[16px] mr-4" />
        <img src={deleteIcon} alt="delete" className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
};

export default ExpenseEntryMobile;
