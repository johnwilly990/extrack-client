import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import SideNavBar from "./SideNavBar";
import mainLogo from "../../assets/logos/main-logo.svg";
import profileWhite from "../../assets/icons/profile-white.svg";

const ProfileNavBar = ({ registeredDate, setCurrentPage }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className={`bg-forestGreen ${isActive ? "md:w-1/3" : ""}`}>
      <div className="flex justify-between items-center px-[14px] py-[13px] md:px-[32px] md:py-[20px] md:m-auto lg:hidden">
        <Link to="/dashboard">
          <img
            src={mainLogo}
            alt="main logo"
            className={`${isActive ? "hidden" : ""}`}
          />
        </Link>
        <div className="flex justify-between items-center lg:hidden">
          <Link to="/profile">
            <img
              src={profileWhite}
              alt="profile avatar"
              className={`w-[32px] h-[32px] mr-4 ${isActive ? "hidden" : ""}`}
            />
          </Link>
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
      </div>
      <div className="hidden lg:block">
        <SideNavBar
          registeredDate={registeredDate}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {isActive ? (
        <SideNavBar
          isActive={isActive}
          registeredDate={registeredDate}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        ""
      )}
    </nav>
  );
};

export default ProfileNavBar;
