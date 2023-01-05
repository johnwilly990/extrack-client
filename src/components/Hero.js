import { Link } from "react-router-dom";
import { heroValues } from "../constants";
import hero from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className=" bg-babyGreen h-[33%]">
      <div className="flex flex-col px-4 py-8 md:flex-row-reverse md:justify-between md:px-[32px] md:py-[48px] md:max-w-[768px] md:m-auto lg:px-[130px] lg:max-w-[1280px]">
        <img
          src={hero}
          alt="hero"
          className="w-full mb-6 md:w-[360px] md:mb-0 md:h-[272px] lg:w-[400px]"
        />
        <div className="md:w-1/2 mr-8">
          <h1 className="text-2xl font-bold mb-6">{heroValues.title}</h1>
          <p className="text-md mb-6 lg:leading-7">{heroValues.description}</p>
          <Link
            to="/signup"
            className="flex justify-center items-center w-full rounded bg-green md:w-1/2"
          >
            <p className="text-white my-3">{heroValues.cta}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
