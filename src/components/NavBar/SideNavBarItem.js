const SideNavBarItem = ({ image, heading }) => {
  return (
    <div className="flex w-[100px] mb-8">
      <div className="flex justify-center">
        <img src={image} alt={heading} className="mr-2 w-[24px] h-[24px]" />
      </div>
      <div className="flex justify-center">
        <p className="text-white w-[67px]">{heading}</p>
      </div>
    </div>
  );
};

export default SideNavBarItem;
