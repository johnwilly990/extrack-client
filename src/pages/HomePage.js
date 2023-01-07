import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews/Reviews";
import Differences from "../components/Differences/Differences";
import { landingHero } from "../constants";

const LandingPage = () => {
  return (
    <section className="relative ">
      <NavBar />
      {landingHero.map((value, index) => (
        <Hero key={index} {...value} />
      ))}
      {/* How it works */}
      <Differences />
      {/* Reviews */}
      <Reviews />
      <Footer />
    </section>
  );
};

export default LandingPage;
