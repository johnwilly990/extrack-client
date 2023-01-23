import { expensesHeadings } from "../../../constants";
import ExpensesHeading from "../ExpensesHeading";
import ExpenseEntry from "../ExpenseEntry";

const GetEntries = ({
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
  return (
    <>
      <div className="bg-investmentGreen px-4 py-2  md:px-8 lg:rounded-t">
        <div className="flex justify-between items-center">
          {expensesHeadings.map((heading, index) => (
            <ExpensesHeading key={index} heading={heading} />
          ))}
          <div className="invisible w-1/4"></div>
        </div>
      </div>
      <div className="bg-babyGreen px-4 py-2 md:px-8">
        {data.map((data) => (
          <ExpenseEntry
            key={data.id}
            data={data}
            currentCategory={currentCategory}
            updateModal={updateModal}
            setUpdateModal={setUpdateModal}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            handleInputChange={handleInputChange}
            handleUpdateEntry={handleUpdateEntry}
            handleDeleteEntry={handleDeleteEntry}
            input={input}
          />
        ))}
      </div>
    </>
  );
};

export default GetEntries;
