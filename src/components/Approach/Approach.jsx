import { ApproachData } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  const approachRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      approachRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: approachRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={approachRef} className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>MY APPROACH</h3>
        </div>

        <div className="grid items-start gap-[2.4rem] xl:grid-cols-4">
          {ApproachData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[.8rem] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] px-[2.4rem] pb-[3.2rem] pt-[2.4rem]"
            >
              <item.icon
                className="text-[3.2rem]"
                style={{ color: item.color }}
              />

              <h4 className="text-[2rem] font-semibold leading-[2.8rem]">
                {item.title}
              </h4>

              <p className="line-clamp-5 text-[1.4rem] leading-[2.4rem] text-Light_Gray_2 hover:line-clamp-none">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
