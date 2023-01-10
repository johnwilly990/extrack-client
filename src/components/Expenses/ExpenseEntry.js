import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const ExpenseEntry = ({ data }) => {
  const convertTime = () => {
    const timestamp = Date.parse(data.created_at);
    const date = new Date(timestamp);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month > 9 ? month : `0${month}`;
    day = day > 9 ? day : `0${day}`;
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="flex justify-between md:justify-start md:border-b-[1px] md:border-investmentGreen md:pb-2 md:mb-2">
      <p className="w-1/3 text-onyx md:w-1/5">{data.category}</p>
      <p className="w-1/3 text-onyx md:w-1/5">{data.item_name}</p>
      <p className="w-1/3 text-onyx md:w-1/5">${data.amount}</p>
      <p className="w-[50%] hidden md:w-[31%] md:block">{convertTime()}</p>
      <div className="hidden md:flex">
        <img src={edit} alt="edit" className="w-[16px] h-[16px] mr-4" />
        <img src={deleteIcon} alt="delete" className="w-[16px] h-[16px]" />
      </div>
    </div>
  );
};

export default ExpenseEntry;
