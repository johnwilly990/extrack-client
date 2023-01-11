import cancel from "../../assets/icons/cancel.svg";
import deleteIcon from "../../assets/icons/delete-white.svg";

const ModalDelete = ({ deleteModal, setDeleteModal, handleDeleteEntry }) => {
  if (!deleteModal) return null;

  return (
    <div className="flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 bg-selectedState shadow-lg px-4">
      <form
        onSubmit={handleDeleteEntry}
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] bg-babyGreen rounded"
      >
        <div className="flex flex-col justify-center p-4">
          <h3 className="text-xl font-bold text-onyx pb-2 border-b-[1px] border-onyx mb-6">
            Delete Confirmation
          </h3>
          <p className="text-md text-onyx mb-4">
            Are you sure you want to delete this entry?
          </p>
        </div>
        <div className="flex flex-col p-4"></div>

        <div className="flex justify-between p-4">
          <button
            onClick={() => setDeleteModal(false)}
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
              src={deleteIcon}
              alt="delete icon"
              className="w-[14px] h-[14px] mr-2"
            />
            Delete Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalDelete;
