import { AboutCommunity } from "@/components";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import Cards from "@/components/HomePage/Events_Cards";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <AboutCommunity />
      <Cards />
      <FaqAccordion />
      <Footer />
    </>
  );
};

export default Home;