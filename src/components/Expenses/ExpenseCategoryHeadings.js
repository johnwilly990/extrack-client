import arrow from "../../assets/icons/arrow.svg";

const ExpenseCategoryHeadings = ({
  heading,
  value,
  currentCategory,
  setCurrentCategory,
}) => {
  return (
    <div
      onClick={() => setCurrentCategory(value)}
      className={`hidden md:cursor-pointer md:flex lg:my-10 lg:justify-between lg:px-2 ${
        value === currentCategory ? "lg:bg-selectedState" : ""
      }`}
    >
      <p
        className={`text-sm lg:text-md lg:mr-8 lg:text-onyx ${
          value === currentCategory ? "font-bold underline lg:p-2" : ""
        }`}
      >
        {heading}
      </p>
      {value === currentCategory && (
        <img src={arrow} alt="arrow" className="hidden lg:block lg:px-2" />
      )}
    </div>
  );
};

export default ExpenseCategoryHeadings;
