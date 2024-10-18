import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";

const Contact_Cta = () => {
  return (
    <section className="py-[10rem] lg:py-[16rem]">
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>LET'S WORK TOGETHER</h3>
        </div>

        <div className="flex flex-col justify-between gap-[2rem] lg:flex-row">
          <div className="w-[100%] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] transition-all duration-[0.2s] hover:translate-y-[-4px] hover:scale-[1.01] lg:w-[58.56rem]">
            <a
              href="mailto:connectmtb@gmail.com"
              className="group flex h-[100%] w-[100%] flex-col gap-[1.6rem] p-[2.4rem]"
            >
              <div className="flex items-start justify-between">
                <div className="flex w-[100%] max-w-[30rem] flex-col gap-[1rem]">
                  <h5 className="text-[1.4rem] leading-[2.4rem] text-Light_Gray_2 md:text-[1.6rem]">
                    Say Hello!
                  </h5>

                  <h4 className="text-[1.8rem] font-bold leading-[3.2rem] md:text-[2rem]">
                    connectmtb@gmail.com
                  </h4>
                </div>

                <div>
                  <BsArrowUpRight className="text-[2rem] transition-all duration-[0.2s] group-hover:rotate-[45deg] md:text-[2.6rem]" />
                </div>
              </div>
            </a>
          </div>

          <div className="group w-[100%] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] transition-all duration-[0.2s] hover:translate-y-[-4px] hover:scale-[1.01] lg:w-[13rem]">
            <a
              href="https://www.linkedin.com/in/tahabaigdev"
              className="flex h-[100%] w-[100%] items-center justify-center p-[2.4rem]"
            >
              <FaLinkedinIn className="text-[3rem] text-[#FF6363] transition-all duration-[0.2s] md:text-[3.5rem] md:group-hover:text-[4rem]" />
            </a>
          </div>

          <div className="group w-[100%] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] transition-all duration-[0.2s] hover:translate-y-[-4px] hover:scale-[1.01] lg:w-[13rem]">
            <a
              href="https://github.com/tahabaigdev"
              className="flex h-[100%] w-[100%] items-center justify-center p-[2.4rem]"
            >
              <FiGithub className="text-[3rem] text-[#B978EC] transition-all duration-[0.2s] md:text-[3.5rem] md:group-hover:text-[4rem]" />
            </a>
          </div>

          <div className="group w-[100%] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] transition-all duration-[0.2s] hover:translate-y-[-4px] hover:scale-[1.01] lg:w-[13rem]">
            <a
              href="https://www.facebook.com/tahabaigdev/"
              className="flex h-[100%] w-[100%] items-center justify-center p-[2.4rem]"
            >
              <GrFacebookOption className="text-[3rem] text-[#58A4FF] transition-all duration-[0.2s] md:text-[3.5rem] md:group-hover:text-[4rem]" />
            </a>
          </div>

          <div className="group w-[100%] rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] transition-all duration-[0.2s] hover:translate-y-[-4px] hover:scale-[1.01] lg:w-[13rem]">
            <a
              href="https://wa.me/3272267139"
              className="flex h-[100%] w-[100%] items-center justify-center p-[2.4rem]"
            >
              <FaWhatsapp className="text-[3rem] text-[#6CCD6A] transition-all duration-[0.2s] md:text-[3.5rem] md:group-hover:text-[4rem]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Cta;
