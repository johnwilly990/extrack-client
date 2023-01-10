import add from "../../assets/icons/add.svg";

const BtnCtaAdd = ({ text, onClick }) => {
  return (
    <div
      onClick={() => onClick((prevCheck) => !prevCheck)}
      className="flex justify-center items-center cursor-pointer mb:16"
    >
      <img src={add} alt="add" className="w-[12px] h-[12px] mr-2" />
      <p className="text-sm text-green">Add {text}</p>
    </div>
  );
};

export default BtnCtaAdd;
