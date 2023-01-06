const CarouselDot = ({ moveDot, index, carouselIndex }) => {
  return (
    <div
      key={index}
      onClick={() => moveDot(index + 1)}
      className={
        carouselIndex === index + 1
          ? "w-[20px] h-[20px] rounded-full border-solid border-[2px] mx-[5px] my-[5px] bg-green cursor-pointer md:w-[15px] md:h-[15px]"
          : "w-[20px] h-[20px] rounded-full border-solid border-[2px] mx-[5px] my-[5px] bg-white cursor-pointer md:w-[15px] md:h-[15px]"
      }
    />
  );
};

export default CarouselDot;
