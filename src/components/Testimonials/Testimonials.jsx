import QuoteIcon from "../../assets/images/quote.svg";
import { TestimonialsData } from "../../constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialsRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={testimonialsRef}>
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>TESTIMONIALS</h3>
        </div>

        <div className="grid items-start gap-[2.4rem] xl:grid-cols-3">
          {TestimonialsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[3.4rem] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] p-[2.4rem]"
            >
              <img src={QuoteIcon} alt="icon" className="max-w-[2.7rem]" />

              <p className="line-clamp-5 text-[1.4rem] leading-[2.4rem] text-Light_Gray_2 hover:line-clamp-none">
                {item.des}
              </p>

              <div className="flex items-center gap-[2rem]">
                <div className="h-[4.8rem] min-w-[4.8rem] overflow-hidden rounded-[50%]">
                  <img
                    src={item.imgURL}
                    alt="Profile Image"
                    className="h-[100%] w-[100%] object-cover"
                  />
                </div>

                <div className="flex w-[100%] max-w-[23rem] flex-col">
                  <h5 className="text-[1.6rem] font-bold leading-[2.4rem]">
                    {item.title}
                  </h5>

                  <h6 className="text-[1.4rem] leading-[2rem] text-Light_Gray_2">
                    {item.subTitle}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
