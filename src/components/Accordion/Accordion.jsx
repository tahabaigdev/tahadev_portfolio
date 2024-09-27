import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h3>{title}</h3>

        <FaPlus
          className="plus-icon"
          style={{ rotate: `${isOpen ? "45deg" : "0deg"}` }}
        />
      </div>
      <div
        className="accordion-body"
        style={{
          maxHeight: `${isOpen ? contentRef.current.scrollHeight : 0}px`,
        }}
        ref={contentRef}
      >
        <div className="accordion-content">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
