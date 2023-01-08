const Input = ({
  type,
  placeholder,
  name,
  value,
  handleInputChange,
  inputError,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      className={` p-2 h-12 my-4 w-full border border-green solid rounded outline-forestGreen ${
        name === "first_name" ? "md:mr-8" : ""
      } ${
        inputError && type === "password" ? "text-red-600 border-red-600" : ""
      }`}
    />
  );
};

export default Input;
