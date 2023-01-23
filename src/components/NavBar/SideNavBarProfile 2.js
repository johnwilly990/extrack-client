import { sideNavBarProfile } from "../../constants";
import profile from "../../assets/icons/profile.svg";
import BtnCtaProfile from "../BtnCta/BtnCtaProfile";

const SideNavBarProfile = ({ registeredDate }) => {
  const getDate = () => {
    const date = new Date(registeredDate);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });

    return { year, month };
  };

  return (
    <div className="flex flex-col items-center bg-white mx-6 py-8 px-6 rounded w-full">
      <img src={profile} alt="profile avatar" className="w-[48px] h-[48px]" />
      <div className="flex flex-col items-center">
        <p className="text-onyx mt-6">John Kim</p>
        <p className="text-onyx text-center">
          Extracker since {getDate().month}, {getDate().year}
        </p>
      </div>
      <div className="mt-8">
        {sideNavBarProfile.map((button, index) => (
          <BtnCtaProfile key={index} {...button} />
        ))}
      </div>
    </div>
  );
};

export default SideNavBarProfile;
