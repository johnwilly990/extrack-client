import { useState } from "react";
import Review from "./Review";
import CarouselBtn from "../Carousel/CarouselBtn";
import CarouselDot from "../Carousel/CarouselDot";
import { reviews } from "../../constants";

const Reviews = () => {
  const [carouselIndex, setCarouselIndex] = useState(1);

  const moveDot = (index) => {
    setCarouselIndex(index);
  };

  const nextSlide = () => {
    if (carouselIndex !== reviews.length) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(1);
    }
  };

  const prevSlide = () => {
    if (carouselIndex !== 1) {
      setCarouselIndex(carouselIndex - 1);
    } else {
      setCarouselIndex(reviews.length);
    }
  };

  return (
    <>
      <div className="bg-babyGreen relative h-[33%] flex flex-col items-center px-4 py-8 md:px-[32px] md:py-[48px] md:m-auto">
        <h2 className="text-2xl font-bold">See what our users have to say!</h2>
        <div className="max-w-full relative overflow-hidden ">
          {reviews.map((review, index) => (
            <Review
              key={review.id}
              {...review}
              carousel={carouselIndex}
              index={index}
            />
          ))}
          <div className="flex absolute bottom-[10px] left-[50%] translate-x-[-50%]">
            {reviews.map((review, index) => (
              <CarouselDot
                moveDot={moveDot}
                key={review.id}
                index={index}
                carouselIndex={carouselIndex}
              />
            ))}
          </div>
          <CarouselBtn moveCarousel={nextSlide} direction={"next"} />
          <CarouselBtn moveCarousel={prevSlide} direction={"prev"} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
