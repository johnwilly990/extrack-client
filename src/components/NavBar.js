import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import mainLogo from "../assets/logos/main-logo.svg";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-forestGreen">
      <div className="flex justify-between items-center mx-[14px] py-[13px] md:mx-[32px] md:py-[20px]">
        <img src={mainLogo} alt="main logo" />
        <div className="md:hidden">
          <Hamburger
            color="#ffffff"
            onToggle={(toggled) => {
              if (toggled) {
                setIsActive(!isActive);
              } else {
                setIsActive(false);
              }
            }}
            rounded
          />
        </div>
        <div className="hidden md:flex justify-between items-center">
          <Link to="/about" className="text-white mr-[24px] text-sm">
            About
          </Link>
          <Link
            to="/login"
            className="flex justify-center items-center bg-babyGreen w-[90px] h-[30px] rounded"
          >
            <p className="text-green text-sm">Login</p>
          </Link>
        </div>
      </div>
      {isActive && (
        <div
          className={`${
            isActive === true
              ? "flex flex-col items-center md:hidden"
              : "hidden"
          }`}
        >
          <Link to="/about" className="text-white mt-6">
            About
          </Link>
          <Link
            to="/login"
            className="flex justify-center items-center mt-3 mb-6 bg-babyGreen w-[80px] h-[40px] rounded"
          >
            <p className="text-green">Login</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
