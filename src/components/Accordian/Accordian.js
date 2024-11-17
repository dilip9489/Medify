import React, { useState } from "react";
import styles from "../Accordian/Accordian.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{title}</p>
        <span className={styles.toggle}>{isOpen ? <AiOutlineMinus style={{ fontSize: "20px", strokeWidth: "4" }}/> : <AiOutlinePlus style={{ fontSize: "20px", strokeWidth: "4" }} />}</span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
