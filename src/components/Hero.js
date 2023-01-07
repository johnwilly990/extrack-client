import { Link } from "react-router-dom";

const Hero = ({ image, title, description, cta }) => {
  return (
    <div className=" bg-babyGreen h-[33%]">
      <div className="flex flex-col px-4 py-8 md:flex-row-reverse md:justify-between md:px-[32px] md:py-[48px] md:m-auto lg:px-[130px] lg:max-w-[1280px]">
        <img
          src={image}
          alt="hero"
          className="w-full mb-6 md:w-[360px] md:mb-0 md:h-[272px] lg:w-[400px]"
        />
        <div className="md:w-1/2 mr-8">
          <h1 className="text-2xl text-center font-bold mb-6 md:text-left">
            {title}
          </h1>
          <p className="text-md text-center text-onyx mb-6 md:text-left lg:leading-7">
            {description}
          </p>
          {cta === "Go To Features" ? (
            <a
              href="#features"
              className="flex justify-center items-center w-full rounded hover:bg-forestGreen bg-green cursor-pointer md:w-[156px]"
            >
              <p className="text-white my-3">{cta}</p>
            </a>
          ) : (
            <Link
              to="/signup"
              className="flex justify-center items-center w-full rounded hover:bg-forestGreen bg-green md:w-[156px]"
            >
              <p className="text-white my-3">{cta}</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
