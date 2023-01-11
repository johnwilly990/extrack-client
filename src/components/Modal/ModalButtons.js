const ModalButtons = ({ onClose, text, image }) => {
  return (
    <>
      <button
        onClick={text === "Cancel" ? onClose : undefined}
        className={`p-2 flex justify-center items-center w-[120px] ${
          text === "Add Entry"
            ? "rounded bg-green text-white hover:bg-forestGreen"
            : "border-2 border-green rounded text-green hover:bg-onyx hover:text-white"
        }`}
      >
        <img
          src={text === "Cancel" ? image : image}
          alt={text === "Cancel" ? "cancel icon" : "add icon"}
          className="w-[20px] h-[20px] mr-2"
        />
        {text === "Cancel" ? "Cancel" : "Add Entry"}
      </button>
    </>
  );
};

export default ModalButtons;
