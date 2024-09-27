import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact_Form = () => {
  const contactFormRef = useRef(null);
  const [state, handleSubmit] = useForm("mqazoyjl");

  // Use useEffect hook before any conditional return
  useEffect(() => {
    gsap.fromTo(
      contactFormRef.current,
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

  // Move the conditional return after all hooks
  if (state.succeeded) {
    return <p className="mt-[10rem] text-center">Thanks for Contacting Us</p>;
  }

  return (
    <section ref={contactFormRef} className="pt-[16rem]">
      <div className="container-style flex items-center justify-center">
        <div className="flex w-[100%] max-w-[60rem] flex-col gap-[3.2rem]">
          <h2 className="font-Righteous text-[4.2rem] leading-[6rem] md:text-[6rem] md:leading-[6.6rem] md:tracking-[-2.4px]">
            Contact.
          </h2>

          <div className="flex flex-col gap-[2rem]">
            <p className="text-[1.6rem] leading-[2.8rem] text-Light_Gray">
              Get in touch if you would like to work together.
            </p>

            <p className="text-[1.6rem] leading-[2.8rem] text-Light_Gray">
              Thanks for stopping by. 🤘
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-[1.5rem]"
          >
            <div className="rounded-[.8rem] bg-[#292929] p-[1.5rem]">
              <input
                type="text"
                className="border-none bg-[transparent] font-[Inter] text-[1.6rem] font-medium leading-[2.24rem] outline-none placeholder:text-Light_Gray"
                placeholder="Name"
                id="name"
                name="name"
              />
            </div>

            <div className="rounded-[.8rem] bg-[#292929] p-[1.5rem]">
              <input
                type="email"
                className="border-none bg-[transparent] font-[Inter] text-[1.6rem] font-medium leading-[2.24rem] outline-none placeholder:text-Light_Gray"
                placeholder="Email"
                id="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="col-span-2 rounded-[.8rem] bg-[#292929] p-[1.5rem]">
              <textarea
                className="h-[15rem] w-[100%] resize-y border-none bg-[transparent] font-[Inter] text-[1.6rem] font-medium leading-[2.24rem] outline-none placeholder:text-Light_Gray"
                placeholder="Message"
                id="message"
                name="message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="col-span-2">
              <button
                disabled={state.submitting}
                className="w-[100%] rounded-[.8rem] bg-[#fcfcfc] p-[1.5rem] text-center font-[Inter] text-[1.6rem] font-semibold leading-[2.24rem] text-[#454545] transition-all duration-[0.3s] ease-in hover:opacity-[0.8]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_Form;
