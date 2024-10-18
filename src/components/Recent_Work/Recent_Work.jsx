import { BsArrowUpRight } from "react-icons/bs";
import { ProjectsData } from "../../constants";

const Recent_Work = () => {
  return (
    <section>
      <div className="container-style flex flex-col gap-[2.4rem]">
        <div className="common-title">
          <h3>Recent Work</h3>
        </div>

        <div className="grid gap-[2.4rem] lg:grid-cols-2">
          {ProjectsData.map((item) => (
            <div
              key={item.id}
              className="rounded-[2.4rem] border-t border-solid border-[#424242] bg-[#1a1a1a] transition-all duration-[0.2s] hover:translate-y-[-4px] hover:scale-[1.01]"
            >
              <a
                href={item.link}
                className="group flex h-[100%] w-[100%] flex-col gap-[1.6rem] p-[1.6rem]"
              >
                <div className="flex items-center justify-between p-[.8rem]">
                  <div className="flex flex-col gap-[1rem]">
                    <h4 className="text-[2rem] font-bold leading-[3.2rem]">
                      {item.title}
                    </h4>

                    <h5 className="text-[1.6rem] leading-[2.4rem] text-Light_Gray_2">
                      {item.subTitle}
                    </h5>
                  </div>

                  <div>
                    <BsArrowUpRight className="text-[2.6rem] transition-all duration-[0.2s] group-hover:rotate-[45deg]" />
                  </div>
                </div>

                <div className="w-[100%] overflow-hidden rounded-[1.2rem]">
                  <img
                    src={item.projectImg}
                    alt="Project Image"
                    className="aspect-auto h-[100%] w-[100%] object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent_Work;
