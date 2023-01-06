import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews/Reviews";
import Differences from "../components/Differences/Differences";

const LandingPage = () => {
  return (
    <section className="relative ">
      <NavBar />
      <Hero />
      {/* How it works */}
      <Differences />
      {/* Reviews */}
      <Reviews />
      <Footer />
    </section>
  );
};

export default LandingPage;
