import Accordion_List from "../Accordion/Accordion_List";

const Faq = () => {
  return (
    <section className="py-[10rem] lg:py-[16rem]">
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
