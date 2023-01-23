import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import ModalUpdate from "../Modal/ModalUpdate";
import ModalDelete from "../Modal/ModalDelete";

const ExpenseEntry = ({
  data,
  currentCategory,
  updateModal,
  setUpdateModal,
  deleteModal,
  setDeleteModal,
  handleInputChange,
  handleUpdateEntry,
  handleDeleteEntry,
  input,
}) => {
  // const convertTime = () => {
  //   const timestamp = Date.parse(data.created_at);
  //   const date = new Date(timestamp);
  //   const year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();
  //   month = month > 9 ? month : `0${month}`;
  //   day = day > 9 ? day : `0${day}`;
  //   return `${year}/${month}/${day}`;
  // };

  return (
    <div className="flex justify-between items-center border-b-[1px] mb-4 border-investmentGreen md:justify-star md:pb-2 md:mb-2">
      <p className="w-1/4 text-onyx ">{data.category}</p>
      <p className="w-1/4 text-onyx ">{data.item_name}</p>
      <p className="w-1/4 text-onyx ">
        ${data.amount?.toLocaleString("en-US")}
      </p>
      <div className="flex justify-end w-1/4">
        <img
          src={edit}
          alt="edit"
          className="w-[16px] h-[16px] mr-4 cursor-pointer"
          onClick={() => setUpdateModal(data)}
        />
        <img
          src={deleteIcon}
          alt="delete"
          className="w-[16px] h-[16px] cursor-pointer"
          onClick={() => setDeleteModal(data)}
        />
      </div>
      <ModalUpdate
        updateModal={updateModal}
        setUpdateModal={setUpdateModal}
        currentCategory={currentCategory}
        handleInputChange={handleInputChange}
        handleUpdateEntry={handleUpdateEntry}
        input={input}
      />
      <ModalDelete
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        handleDeleteEntry={handleDeleteEntry}
      />
    </div>
  );
};

export default ExpenseEntry;
