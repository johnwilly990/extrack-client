import { useState } from "react";
import RemainingBalance from "../RemainingBalance";
import ExpenseMonthSelect from "./ExpensesMonthSelect";
import ExpensesCategorySelect from "./ExpensesCategorySelect";
import ExpenseCategoryHeadings from "./ExpenseCategoryHeadings";
import BtnCtaAddEntry from "../BtnCta/BtnCtaAddEntry";
import SecondarySideNavBar from "../NavBar/SecondarySideNavBar";
import GetEntries from "./Entries/GetEntries";
import { expensesCategoryValues } from "../../constants";
import useAddEntry from "../../utils/useAddEntry";
import useUpdateEntry from "../../utils/useUpdateEntry";
import useDeleteEntry from "../../utils/useDeleteEntry";
import useGetData from "../../utils/useGetData";

const initialValues = {
  item_name: "",
  amount: 0,
  category: "",
};

const ExpensesInfo = ({
  userData,
  authToken,
  addModal,
  setAddModal,
  updateModal,
  setUpdateModal,
  deleteModal,
  setDeleteModal,
  counter,
  setCounter,
  currentPage,
  currentMonth,
  setCurrentMonth,
  restOfMonths,
  monthAtm,
}) => {
  const [currentCategory, setCurrentCategory] = useState("recurring");
  const [input, setInput] = useState(initialValues);
  const [addEntry] = useAddEntry(
    input,
    authToken,
    setAddModal,
    setCounter,
    setInput,
    counter,
    initialValues,
    currentCategory
  );
  const [updateEntry] = useUpdateEntry(
    currentCategory,
    updateModal.id,
    input,
    authToken,
    setUpdateModal,
    setCounter,
    counter
  );
  const [deleteEntry] = useDeleteEntry(
    currentCategory,
    deleteModal.id,
    authToken,
    setDeleteModal,
    setCounter,
    counter
  );
  const [data] = useGetData(authToken, currentCategory);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <SecondarySideNavBar
        setCurrentMonth={setCurrentMonth}
        currentMonth={currentMonth}
        restOfMonths={restOfMonths}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentPage={currentPage}
      />
      <section className="lg:w-[60%] lg:py-8 lg:px-16">
        <div className="flex flex-col justify-center items-center py-14 px-6 lg:justify-between lg:px-0 lg:py-0 lg:pb-16">
          <RemainingBalance userData={userData} />
        </div>
        <div className="flex flex-col items-center bg-babyGreen mb-8 md:flex-row md:px-8 lg:hidden">
          <ExpenseMonthSelect
            setCurrentMonth={setCurrentMonth}
            monthAtm={monthAtm}
            restOfMonths={restOfMonths}
          />
          <ExpensesCategorySelect setCurrentCategory={setCurrentCategory} />
          <div className="md:flex md:justify-between md:w-full">
            {expensesCategoryValues.map((heading, index) => (
              <ExpenseCategoryHeadings
                key={index}
                {...heading}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-8 md:justify-end md:px-8 md:w-full md:mb-4 lg:px-0">
          <BtnCtaAddEntry
            text="Entry"
            addModal={addModal}
            setAddModal={setAddModal}
            currentCategory={currentCategory}
            handleInputChange={handleInputChange}
            handleAddEntry={addEntry}
            input={input}
          />
        </div>
        <GetEntries
          currentCategory={currentCategory}
          data={data}
          updateModal={updateModal}
          setUpdateModal={setUpdateModal}
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          handleInputChange={handleInputChange}
          handleUpdateEntry={updateEntry}
          handleDeleteEntry={deleteEntry}
          input={input}
        />
      </section>
    </>
  );
};

export default ExpensesInfo;
