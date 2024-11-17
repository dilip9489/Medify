
import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "../Accordian/Accordian.js";
import doctorPatient from './Image-21-1.png.png'
import emoji from './svg.h2d-63a39c21.png'
import heart from './Clip path group.png'


const FAQ = () => {
  return (
    <div className={styles.faq}>
      <h3 className={styles.heading}>Frequently Asked Questions</h3>
    <div className={styles.faqContainer}>
       
      
      <div className={styles.leftSection}>
        <div className={styles.imageWrapper}>
          <img
            src={doctorPatient}  
            alt="Doctor with Patient"
            className={styles.mainImage}
          />
          <div className={styles.badge}>
           <div className={styles.emoji}>
            <img src={emoji} alt="emoji"/>
           </div>
           <div className={styles.badgeText}> 
           <span>84k+</span>
           <p>Happy Patients</p>
           </div>
            
          </div>
        </div>
      </div>

       
      <div className={styles.rightSection}>
        
        <Accordion
          title="Why choose our medical for your family?"
          content="Our medical services ensure the best care and comfort for your loved ones."
        />
        <Accordion
          title="Why we are different from others?"
          content="We combine advanced medical practices with a human touch."
        />
        <Accordion
          title="Trusted & experience senior care & love"
          content="We specialize in providing care and love to our senior patients."
        />
        <Accordion
          title="How to get appointment for emergency cases?"
          content="Simply call our hotline or visit our website for emergency appointments."
        />
      </div>
    </div>
    </div>
  
    
  );
};

export default FAQ;
