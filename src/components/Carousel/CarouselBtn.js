import leftArrow from "../../assets/icons/left-arrow.svg";
import rightArrow from "../../assets/icons/right-arrow.svg";

const CarouselBtn = ({ moveCarousel, direction }) => {
  return (
    <button
      onClick={moveCarousel}
      className={`hidden ${
        direction === "next"
          ? "md:block md:cursor-pointer md:absolute md:top-[20%] md:right-[10px]"
          : "md:block md:cursor-pointer md:absolute md:top-[20%] md:left-[10px]"
      }`}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt={direction === "next" ? "right arrow" : "left-arrow"}
      />
    </button>
  );
};

export default CarouselBtn;
