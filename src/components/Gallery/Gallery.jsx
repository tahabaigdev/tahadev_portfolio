import Img1 from "../../assets/images/taha-1.webp";
import Img2 from "../../assets/images/taha-2.webp";
import Img3 from "../../assets/images/taha-3.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      galleryRef.current,
      { opacity: 0, y: "30px" },
      {
        y: "0px",
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      },
    );
  }, []);

  return (
    <section ref={galleryRef} className="pt-[4rem]">
      <div className="container-style grid grid-cols-3 gap-[2.4rem]">
        {[Img1, Img2, Img3].map((item, i) => (
          <div
            key={i}
            className="aspect-square w-[100%] overflow-hidden rounded-[3.2rem]"
          >
            <img
              src={item}
              alt="image"
              className="h-[100%] w-[100%] object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
