import { expensesHeadings } from "../../../constants";
import ExpensesHeading from "../ExpensesHeading";
import ExpenseEntry from "../ExpenseEntry";
import useGetData from "../../../utils/useGetData";

const GetEntries = ({ currentCategory }) => {
  const authToken = sessionStorage.getItem("authToken");
  const [data, setData] = useGetData(authToken, currentCategory);

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
          <ExpenseEntry key={data.id} data={data} />
        ))}
      </div>
    </>
  );
};

export default GetEntries;
