import { IoMdArrowUp } from "react-icons/io";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 100%",
        },
      },
    );
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef}>
      <div className="container-style flex flex-col items-center justify-between gap-[1.2rem] md:flex-row">
        <div>
          <p className="text-Light_Gray_2 text-center text-[1.4rem] leading-[2.4rem] md:text-left">
            © 2024, Designed and Developed by{" "}
            <span className="text-Pure_White">Taha Baig</span>
          </p>
        </div>

        <div>
          <button
            onClick={backToTop}
            className="inline-flex items-center gap-[1rem] text-[1.3rem] font-medium leading-[2.4rem] text-[#76BDBF]"
          >
            Back to top <IoMdArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
