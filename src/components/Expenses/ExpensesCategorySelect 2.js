import { expensesCategoryValues } from "../../constants";

const ExpensesCategorySelect = ({ setCurrentCategory }) => {
  return (
    <div
      onChange={(e) => setCurrentCategory(e.target.value)}
      className="py-4 md:hidden"
    >
      <select className="bg-babyGreen rounded outline-forestGreen">
        {expensesCategoryValues.map((category, index) => (
          <option key={index} value={category.value}>
            {category.heading}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpensesCategorySelect;
