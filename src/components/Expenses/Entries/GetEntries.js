import { expensesHeadings } from "../../../constants";
import ExpensesHeading from "../ExpensesHeading";
import ExpenseEntry from "../ExpenseEntry";
import ExpenseEntryMobile from "../ExpenseEntryMobile";
import useGetData from "../../../utils/useGetData";

const GetEntries = ({ currentCategory }) => {
  const authToken = sessionStorage.getItem("authToken");
  const [data, setData] = useGetData(authToken, currentCategory);

  return (
    <>
      <div className="flex justify-between bg-investmentGreen px-4 py-2 md:justify-start md:px-8 lg:rounded-t">
        {expensesHeadings.map((heading, index) => (
          <ExpensesHeading key={index} heading={heading} />
        ))}
      </div>
      <div className="bg-babyGreen px-4 py-2 md:px-8">
        {data.map((data) => (
          <ExpenseEntry key={data.id} data={data} />
        ))}
      </div>
      <div className="bg-investments px-4 py-2 md:hidden">
        <ExpenseEntryMobile data={data} />
      </div>
    </>
  );
};

export default GetEntries;
