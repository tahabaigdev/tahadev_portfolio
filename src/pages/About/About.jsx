import Approach from "../../components/Approach/Approach";
import Common_Hero from "../../components/Common_Hero/Common_Hero";
import Contact_Cta from "../../components/Contact_Cta/Contact_Cta";
import Experience from "../../components/Experience/Experience";
import Gallery from "../../components/Gallery/Gallery";
import Skills from "../../components/Skills/Skills";
import Testimonials from "../../components/Testimonials/Testimonials";

const About = () => {
  return (
    <>
      <div className="pt-[16rem]">
        <Common_Hero
          title="About."
          subTitle="I’m a developer from Pakistan 🇵🇰 with a passion for code."
          content="With over 2 years of hands-on experience in front-end development, I specialize in creating dynamic and responsive web applications using the latest technologies."
        />
      </div>

      <Gallery />

      <Approach />

      <Skills />

      <Experience />

      <Testimonials />

      <Contact_Cta />
    </>
  );
};

export default About;
