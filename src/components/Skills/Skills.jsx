import { SkillsData } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      skillsRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={skillsRef}>
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>Skills</h3>
        </div>

        <div className="grid gap-[2.4rem] lg:grid-cols-3">
          {SkillsData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-[1.6rem] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] p-[2.4rem]"
            >
              <item.icon
                className="text-[2.6rem]"
                style={{ color: item.color }}
              />

              <h3 className="text-[2rem] font-semibold leading-[2.8rem]">
                {item.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
