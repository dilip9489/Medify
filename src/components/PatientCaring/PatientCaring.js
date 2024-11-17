import React from "react";
import "./PatientCaring.css";  

import CheckCircleIcon from '@mui/icons-material/CheckCircle';  
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import doctorImage1 from "../PatientCaring/image-01-1.png.png";  
import doctorImage2 from "../PatientCaring/image-02-1.png.png";

const PatientCaring = () => {
  return (
    <div className="patient-caring-container">
       
      <div className="images-container">
        <div className="image-card">
          <div className="badge">
            <div style={{display:"flex", marginTop:"10px",  }} >
            <PhoneInTalkIcon style={{  marginRight: "5px", width: "43px",height:"34px",backgroundColor: "#007bff", color:"#ffffff",borderRadius:"8px" }} /> 
          
          <span style={{color:"#1B3C74", marginTop:"10px",}}>Free Consultation</span>
          </div>
          
            <p className="badge-text">Consultation with the best</p>
          </div>
          <img src={doctorImage1} alt="Doctor Consultation" />
          
        </div>
        <div className="image-card image-card-overlay">
          <img src={doctorImage2} alt="Patient Interaction" />
        </div>
      </div>

    
      <div className="text-container">
        <h3 className="subheading">HELPING PATIENTS FROM AROUND THE GLOBE!</h3>
        <h1 className="main-heading">
          Patient <span className="highlight">Caring</span>
        </h1>
        <p className="description">
          Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
        </p>
        <ul className="features-list">
          <li>
            <CheckCircleIcon style={{ marginRight: "10px", color: "#007bff" }} />
            Stay Updated About Your Health
          </li>
          <li>
            <CheckCircleIcon style={{ marginRight: "10px", color: "#007bff" }} />
            Check Your Results Online
          </li>
          <li>
            <CheckCircleIcon style={{ marginRight: "10px", color: "#007bff" }} />
            Manage Your Appointments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PatientCaring;
