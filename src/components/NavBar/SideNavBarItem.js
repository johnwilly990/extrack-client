const SideNavBarItem = ({ image, heading, setCurrentPage, setIsActive }) => {
  const handlePageChange = () => {
    if (heading === "Overview") {
      setCurrentPage("overview");
      setIsActive(false);
    } else if (heading === "Expenses") {
      setCurrentPage("expenses");
      setIsActive(false);
    } else {
      setCurrentPage("reports");
      setIsActive(false);
    }
  };

  return (
    <div
      onClick={handlePageChange}
      className="flex w-[100px] mb-8 cursor-pointer"
    >
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
