const ExpenseCategoryHeadings = ({
  heading,
  value,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <div
      onClick={() => setCurrentCategory(value)}
      className="hidden md:cursor-pointer md:flex"
    >
      <p
        className={`text-sm ${
          value === currentCategory ? "font-bold underline" : ""
        }`}
      >
        {heading}
      </p>
    </div>
  );
};

export default ExpenseCategoryHeadings;
