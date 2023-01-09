import { Link } from "react-router-dom";

const BtnCta = ({ cta }) => {
  return (
    <Link
      to="/signup"
      className="flex justify-center items-center w-full rounded hover:bg-forestGreen bg-green md:w-[156px]"
    >
      <p className="text-white my-3">{cta}</p>
    </Link>
  );
};

export default BtnCta;
