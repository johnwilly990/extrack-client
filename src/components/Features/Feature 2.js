import React from "react";

const Feature = ({ id, image, title, description }) => {
  return (
    <div
      id="features"
      className="bg-babyGreen flex flex-col px-6 py-8 md:px-16 md:py-12 md:flex-row-reverse md:justify-between lg:px-[200px] lg:py-[60px] lg:mx-auto lg:max-w-[1280px]"
    >
      <div
        className={`md:flex md:flex-col md:w-1/2 ${
          id === 2 ? "md:order-2 md:mr-6" : "md:ml-6"
        }`}
      >
        <div className="rounded-l-full bg-babyGreen mb-8 md:w-[320px]">
          <div className="flex items-center">
            <div className="flex bg-green px-4 py-2 rounded-full text-white">
              0{id}
            </div>
            <h3 className="px-4 text-sm">{title}</h3>
          </div>
        </div>
        <p className="text-onyx text-sm mb-6 md:mb-4">{description}</p>
      </div>
      <div className="md:w-1/2 lg:w-auto">
        <img
          src={image}
          alt={title}
          className="w-full rounded md:w-[320px] md:h-[275px]"
        />
        <a
          href="https://www.flaticon.com/free-icons/data"
          title="data icons"
          className="text-[2px]"
        >
          Data icons created by photo3idea_studio - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Feature;
