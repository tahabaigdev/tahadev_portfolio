import Accordion_List from "../Accordion/Accordion_List";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const faqRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      faqRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={faqRef} className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>
            Faq<span className="lowercase">s</span>
          </h3>
        </div>

        <div className="rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] px-[2rem]">
          <Accordion_List />
        </div>
      </div>
    </section>
  );
};

export default Faq;
