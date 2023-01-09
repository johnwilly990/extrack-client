import { useState } from "react";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import SideNavBarItem from "./SideNavBarItem";
import { sideNavBar } from "../../constants";
import mainLogo from "../../assets/logos/main-logo.svg";
import profileWhite from "../../assets/icons/profile-white.svg";
import settings from "../../assets/icons/settings.svg";
import SideNavBarProfile from "./SideNavBarProfile";

const SideNavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="bg-forestGreen">
      <div className="flex justify-between items-center px-[14px] py-[13px] md:px-[32px] md:py-[20px] md:m-auto lg:hidden">
        <Link to="/dashboard">
          <img
            src={mainLogo}
            alt="main logo"
            className={`${isActive ? "hidden" : ""}`}
          />
        </Link>
        <div className="flex justify-between items-center lg:hidden">
          <img
            src={profileWhite}
            alt="profile avatar"
            className={`w-[32px] h-[32px] mr-4 ${isActive ? "hidden" : ""}`}
          />
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
      {isActive && (
        <>
          <div
            className={`${
              isActive === true
                ? "flex flex-col items-center justify-start z-10 absolute bg-forestGreen w-full h-full pt-16 px-14 md:w-1/3"
                : "hidden"
            }`}
          >
            {sideNavBar.map((item, index) => (
              <SideNavBarItem key={index} {...item} />
            ))}
            <div className="border-b-2 border-white w-full" />
            <div className="flex w-[100px] h-[28%] my-8">
              <div className="flex justify-center">
                <img
                  src={settings}
                  alt="settings"
                  className="mr-2 w-[24px] h-[24px]"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-white w-[67px]">Settings</p>
              </div>
            </div>
            <SideNavBarProfile />
          </div>
        </>
      )}
    </nav>
  );
};

export default SideNavBar;
