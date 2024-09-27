import React, { useState } from "react";
import Accordion from "./Accordion";
import { FaqsData } from "../../constants";

const Accordion_List = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {FaqsData.map((item, index) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion_List;
