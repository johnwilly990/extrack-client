import ModalAdd from "../Modal/ModalAdd";
import addWhite from "../../assets/icons/add-white.svg";

const BtnCtaAddEntry = ({
  text,
  addModal,
  setAddModal,
  currentCategory,
  handleInputChange,
  handleAddEntry,
  input,
}) => {
  return (
    <div
      onClick={() => setAddModal(true)}
      className="flex items-center w-[100px] cursor-pointer bg-green rounded hover:bg-forestGreen"
    >
      <img src={addWhite} alt="add" className="w-[12px] h-[12px] mx-2" />
      <p className="text-sm text-white py-2">Add {text}</p>
      <ModalAdd
        addModal={addModal}
        setAddModal={setAddModal}
        currentCategory={currentCategory}
        handleInputChange={handleInputChange}
        handleAddEntry={handleAddEntry}
        input={input}
      />
    </div>
  );
};

export default BtnCtaAddEntry;
