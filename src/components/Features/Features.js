import { features } from "../../constants";
import Feature from "./Feature";

const Features = () => {
  return (
    <>
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </>
  );
};

export default Features;
