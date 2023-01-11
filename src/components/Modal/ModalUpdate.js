import CategoryOfEntries from "../Expenses/Entries/CategoryOfEntries";
import {
  monthlySelect,
  flexibleSelect,
  investmentsSelect,
  savingsSelect,
} from "../../constants";
import addWhite from "../../assets/icons/add-white.svg";
import cancel from "../../assets/icons/cancel.svg";

const ModalUpdate = ({
  updateModal,
  setUpdateModal,
  currentCategory,
  handleInputChange,
  handleUpdateEntry,
  input,
}) => {
  if (!updateModal) return null;

  return (
    <div className="flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 bg-selectedState shadow-lg px-4">
      <form
        onSubmit={handleUpdateEntry}
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] bg-babyGreen rounded"
      >
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-bold text-onyx mb-4">Update Entry</h2>
        </div>
        <div className="flex flex-col p-4">
          <input
            type="text"
            placeholder={updateModal.item_name}
            name="item_name"
            value={input.item_name}
            onChange={handleInputChange}
            className=" p-2 h-12 my-4 w-full border border-green solid rounded outline-forestGreen"
          />
          <input
            type="number"
            placeholder={updateModal.amount}
            name="amount"
            value={input.amount}
            onChange={handleInputChange}
            className=" p-2 h-12 my-4 w-full border border-green solid rounded outline-forestGreen"
          />
          <select
            name="category"
            value={input.category}
            onChange={handleInputChange}
            className="text-onyx p-2 h-12 my-4 w-full border border-green solid rounded outline-forestGreen"
          >
            <option>Please select a category</option>
            {currentCategory === "recurring" &&
              monthlySelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
            {currentCategory === "flexible" &&
              flexibleSelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
            {currentCategory === "investments" &&
              investmentsSelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
            {currentCategory === "savings" &&
              savingsSelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
          </select>
        </div>
        <div className="flex justify-between p-4">
          <button
            onClick={() => setUpdateModal(false)}
            className="px-[2px] py-[4px] text-sm flex justify-center items-center w-[120px] border-2 border-green rounded text-green hover:bg-onyx hover:text-white"
          >
            <img
              src={cancel}
              alt="cancel icon"
              className="w-[20px] h-[20px] mr-2"
            />
            Cancel
          </button>
          <button className="text-sm flex justify-center items-center w-[120px] rounded bg-green text-white hover:bg-forestGreen">
            <img
              src={addWhite}
              alt="add icon"
              className="w-[14] h-[14px] mr-2"
            />
            Update Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalUpdate;
