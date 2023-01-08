import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import mainLogo from "../assets/logos/main-logo.svg";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-forestGreen">
      <div className="flex justify-between items-center px-[14px] py-[13px] md:px-[32px] md:py-[20px] md:m-auto lg:max-w-[1280px]">
        <Link to="/">
          <img src={mainLogo} alt="main logo" />
        </Link>
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
            className="flex justify-center items-center bg-babyGreen w-[90px] h-[30px] rounded hover:bg-onyx"
          >
            <p className="text-green text-sm hover:text-white">Login</p>
          </Link>
        </div>
      </div>
      {isActive && (
        <div
          className={`${
            isActive === true
              ? "flex flex-col items-center justify-center z-10 absolute bg-forestGreen w-full h-[25vh] md:hidden"
              : "hidden"
          }`}
        >
          <Link to="/about" className="text-white mt-6 uppercase">
            about
          </Link>
          <Link
            to="/login"
            className="flex justify-center items-center mt-3 mb-6 bg-babyGreen w-[80px] h-[40px] rounded uppercase hover:bg-onyx"
          >
            <p className="text-green hover:text-white">login</p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
