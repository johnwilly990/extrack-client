const SideNavBarItem = ({ image, heading, setCurrentPage }) => {
  const handlePageChange = () => {
    if (heading === "Overview") {
      setCurrentPage("overview");
    } else if (heading === "Expenses") {
      setCurrentPage("expenses");
    } else {
      setCurrentPage("reports");
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
