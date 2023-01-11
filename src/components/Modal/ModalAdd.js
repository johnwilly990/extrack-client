import Input from "../Input";
import CategoryOfEntries from "../Expenses/Entries/CategoryOfEntries";
import {
  newEntryInput,
  monthlySelect,
  flexibleSelect,
  investmentsSelect,
  savingsSelect,
  modalBtn,
} from "../../constants";
import ModalButtons from "./ModalButtons";

const ModalAdd = (props) => {
  if (!props.openModal) return null;

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
      onClick={() => props.setOpenModal(false)}
      className="flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 bg-selectedState shadow-lg px-4"
    >
      <form
        onSubmit={props.handleAddEntry}
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] bg-babyGreen rounded"
      >
        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl text-onyx mb-4">New Entry</h1>
          <p className="text-lg text-center text-onyx">
            Add an entry to {categoryText(props.currentCategory)}
          </p>
        </div>
        <div className="flex flex-col p-4">
          {newEntryInput.map((input, index) => (
            <Input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              {...props.input}
              handleInputChange={props.handleInputChange}
            />
          ))}
          <select
            name="category"
            value={props.input.category}
            onChange={props.handleInputChange}
            className="text-onyx p-2 h-12 my-4 w-full border border-green solid rounded outline-forestGreen"
          >
            <option>Category</option>
            {props.currentCategory === "recurring" &&
              monthlySelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
            {props.currentCategory === "flexible" &&
              flexibleSelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
            {props.currentCategory === "investments" &&
              investmentsSelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
            {props.currentCategory === "savings" &&
              savingsSelect.map((category, index) => (
                <CategoryOfEntries key={index} category={category} />
              ))}
          </select>
        </div>
        <div className="flex justify-between p-4">
          {modalBtn.map((button, index) => (
            <ModalButtons
              key={index}
              {...button}
              onClose={() => props.setOpenModal(false)}
            />
          ))}
        </div>
      </form>
    </div>
  );
};

export default ModalAdd;
