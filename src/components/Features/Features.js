import { features } from "../../constants";
import Feature from "./Feature";
import BtnCta from "../BtnCta";

const Features = () => {
  return (
    <>
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
      <div className="px-6 pb-8 flex justify-center bg-babyGreen">
        <BtnCta cta="Sign Up Now!" />
      </div>
    </>
  );
};

export default Features;
