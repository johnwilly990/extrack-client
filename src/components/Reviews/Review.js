const Review = ({ image, name, review, carousel, index }) => {
  return (
    <div
      className={`flex flex-col items-center my-8 ${
        carousel === index + 1
          ? "w-full h-full transition-all opacity-1"
          : "w-full h-full hidden transition-all"
      }`}
    >
      <img src={image} alt={name} className="w-[64px] h-[64px] rounded-full" />
      <p className="text-onyx my-6 text-center">{name}</p>
      <p className="text-onyx text-center mb-8">{review}</p>
    </div>
  );
};

/*
.slide {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity ease-in-out 0.4s;
}
.active-anim {
  opacity: 1;
}
*/

export default Review;
