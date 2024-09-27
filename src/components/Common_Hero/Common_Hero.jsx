import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Common_Hero = ({ title, subTitle, content }) => {
  const commonHeroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      commonHeroRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        stagger: 0.2,
        opacity: 1,
        duration: 0.6,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <section ref={commonHeroRef}>
      <div className="container-style flex flex-col gap-[1.6rem]">
        <h1 className="font-Righteous text-[4.2rem] leading-[6rem] md:text-[6rem] md:leading-[6.6rem] md:tracking-[-2.4px]">
          {title}
        </h1>

        <h3 className="max-w-[54rem] text-[2.8rem] leading-[3.6rem] tracking-[-0.5px] md:text-[3.2rem] md:leading-[4rem]">
          {subTitle}
        </h3>

        <p className="max-w-[58.8rem] text-[1.6rem] leading-[2.8rem] text-Light_Gray">
          {content}
        </p>
      </div>
    </section>
  );
};

export default Common_Hero;
