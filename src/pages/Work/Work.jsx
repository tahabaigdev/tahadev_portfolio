import Common_Hero from "../../components/Common_Hero/Common_Hero";
import Contact_Cta from "../../components/Contact_Cta/Contact_Cta";
import Recent_Work from "../../components/Recent_Work/Recent_Work";

const Work = () => {
  return (
    <>
      <div className="py-[16rem]">
        <Common_Hero
          title="Work."
          subTitle="Here are some of my projects from the last few months."
          content="I have had the privilege of working on a wide range of projects, which has enabled me to refine my skills and consistently push the boundaries of my capabilities."
        />
      </div>

      <Recent_Work />

      <Contact_Cta />
    </>
  );
};

export default Work;
