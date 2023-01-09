import showPw from "../assets/icons/show-password.svg";
import hidePw from "../assets/icons/hide-password.svg";

const Input = ({
  type,
  placeholder,
  name,
  value,
  handleInputChange,
  inputError,
}) => {
  return (
    <>
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
      {name === "password" && (
        <img
          src={showPw}
          alt="password toggle"
          className="absolute top-[62%] right-[10%]"
        />
      )}
      {name === "confirm_password" && (
        <img
          src={showPw}
          alt="password toggle"
          className="absolute top-[71%] right-[10%]"
        />
      )}
    </>
  );
};

export default Input;
