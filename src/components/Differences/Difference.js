const Difference = ({ id, title, description }) => {
  return (
    <div className="flex flex-col items-start mx-4 mb-6">
      <div className="rounded-l-full bg-babyGreen mb-8">
        <div className="flex items-center space-x-2">
          <div className="flex bg-green px-4 py-2 rounded-full text-white">
            0{id}
          </div>
          <h3 className="pr-4">{title}</h3>
        </div>
      </div>
      <p className="text-onyx md:mb-4">{description}</p>
    </div>
  );
};

export default Difference;
