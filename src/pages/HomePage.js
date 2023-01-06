import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews/Reviews";
import { works } from "../constants";
import { howItWorks } from "../constants";
import time from "../assets/images/time.jpg";

const LandingPage = () => {
  return (
    <section className="relative ">
      <NavBar />
      <Hero />
      {/* How it works */}
      <div className="px-4 py-8 md:flex md:px-[32px] md:py-[48px] md:m-auto lg:px-[130px] lg:max-w-[1280px]">
        <div className="md:flex md:flex-col md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold text-center mb-8 md:text-left">
            {howItWorks.title}
          </h2>
          <p className="text-onyx mb-10 text-center md:text-left md:mt-[8px]">
            {howItWorks.description}
          </p>
          <img
            src={time}
            alt="hourglass"
            className="hidden md:block md:w-full rounded"
          />
        </div>
        <div className="md:flex md:flex-col md:w-1/2">
          {works.map((el) => (
            <HowItWorks key={el.id} {...el} />
          ))}
        </div>
      </div>
      {/* Reviews */}
      <Reviews />
    </section>
  );
};

export default LandingPage;
