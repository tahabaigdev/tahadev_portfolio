import Contact_Cta from "../../components/Contact_Cta/Contact_Cta";
import Faq from "../../components/Faq/Faq";
import Hero from "../../components/Hero/Hero";
import Infinite_Scroller from "../../components/Infinite_Scroller/Infinite_Scroller";
import Recent_Work from "../../components/Recent_Work/Recent_Work";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />

      <Infinite_Scroller />

      <Recent_Work />

      <Faq />

      <Testimonials />

      <Contact_Cta />
    </>
  );
};

export default Home;
