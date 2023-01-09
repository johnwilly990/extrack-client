import { Link, useNavigate } from "react-router-dom";

const BtnCtaProfile = ({ image, heading }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
  };

  return (
    <Link
      to={`${heading === "Profile" ? "/profile" : "/"}`}
      className={`flex items-center justify-center my-4 w-[150px] ${
        heading === "Profile"
          ? "border-2 border-green rounded"
          : "bg-green rounded"
      }`}
      onClick={heading === "Logout" ? () => handleLogout() : ""}
    >
      <img src={image} alt={heading} className="w-[24px] h-[24px] mr-4" />
      <p
        className={`text-sm py-2 ${
          heading === "Profile" ? "text-green" : "text-white"
        }`}
      >
        {heading}
      </p>
    </Link>
  );
};

export default BtnCtaProfile;
