import { Link } from "react-router-dom";
import SideNavBarItem from "./SideNavBarItem";
import { sideNavBar } from "../../constants";
import settings from "../../assets/icons/settings.svg";
import SideNavBarProfile from "./SideNavBarProfile";
import extendedLogo from "../../assets/logos/extended-logo.svg";

const SideNavBar = ({ registeredDate }) => {
  return (
    <div className="flex flex-col items-center justify-start z-10 absolute bg-forestGreen w-full h-full pt-16 px-14 md:w-1/3 md:px-8 md:py-8 lg:w-full lg:relative lg:z-0 lg:h-[100vh]">
      <img
        src={extendedLogo}
        alt="logo"
        className="hidden mb-[80px] lg:block"
      />
      {sideNavBar.map((item, index) => (
        <SideNavBarItem key={index} {...item} />
      ))}
      <div className="border-b-[1px] border-white w-full" />
      <div className="h-[28%]">
        <Link to="/settings" className="flex w-[100px] my-8">
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
        </Link>
      </div>
      <SideNavBarProfile registeredDate={registeredDate} />
    </div>
  );
};

export default SideNavBar;
