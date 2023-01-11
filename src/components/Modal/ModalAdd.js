import Input from "../Input";
import CategoryOfEntries from "../Expenses/Entries/CategoryOfEntries";
import {
  newEntryInput,
  monthlySelect,
  flexibleSelect,
  investmentsSelect,
  savingsSelect,
} from "../../constants";
import addWhite from "../../assets/icons/add-white.svg";
import cancel from "../../assets/icons/cancel.svg";

const ModalAdd = ({
  addModal,
  setAddModal,
  currentCategory,
  handleInputChange,
  handleAddEntry,
  input,
}) => {
  if (!addModal) return null;

  const categoryText = (currentCategory) => {
    let text = "";
    if (currentCategory === "recurring") {
      text = "Monthly Payments";
    } else if (currentCategory === "flexible") {
      text = "Flexible Expenses";
    } else if (currentCategory === "investments") {
      text = "Investments";
    } else {
      text = "Savings";
    }

    return text;
  };

  return (
    <div
      onClick={() => setAddModal(false)}
      className="flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 bg-selectedState shadow-lg px-4"
    >
      <form
        onSubmit={handleAddEntry}
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] bg-babyGreen rounded"
      >
        <div className="flex flex-col justify-center items-center p-4">
          <h2 className="text-2xl font-bold  text-onyx mb-4">New Entry</h2>
          <p className="text-lg text-center text-onyx">
            Add an entry to {categoryText(currentCategory)}
          </p>
        </div>
        <div className="flex flex-col p-4">
          {newEntryInput.map((field, index) => (
            <Input
              key={index}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              {...input}
              handleInputChange={handleInputChange}
            />
          ))}
          <select
            name="category"
            value={input.category}
            onChange={handleInputChange}
            className="text-onyx p-2 h-12 my-4 w-full border border-green solid rounded outline-forestGreen"
          >
            <option>Category</option>
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
            onClick={() => setAddModal(false)}
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
            Add Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalAdd;
