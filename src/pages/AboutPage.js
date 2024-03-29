import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import { aboutHero } from "../constants";
import Features from "../components/Features/Features";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      {aboutHero.map((value, index) => (
        <Hero key={index} {...value} />
      ))}
      <div className="bg-babyGreen">
        <Features />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
