import { IoCalendarClearOutline } from "react-icons/io5";
import { ExperienceData } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      experienceRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={experienceRef} className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>Experience</h3>
        </div>

        <div className="flex flex-col gap-[2.4rem]">
          {ExperienceData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start gap-[1.6rem] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] p-[2.4rem] lg:flex-row"
            >
              <div className="flex basis-[30%] flex-col items-center gap-[1.6rem] lg:flex-row xl:basis-[25%]">
                <IoCalendarClearOutline className="text-[2rem] text-[#E8CD82]" />

                <h4 className="text-[1.6rem] lg:text-[2rem] lg:leading-[3.2rem]">
                  {item.tenure}
                </h4>
              </div>

              <div className="basis-[40%] xl:basis-[50%]">
                <h4 className="text-[1.6rem] font-semibold lg:text-[2rem] lg:leading-[2.8rem]">
                  {item.category}
                </h4>
              </div>

              <div className="basis-[30%] xl:basis-[25%]">
                <h4 className="text-Light_Gray_3 text-[1.6rem] lg:text-[2rem] lg:leading-[3.2rem]">
                  {item.company}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
