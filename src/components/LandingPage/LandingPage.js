// Import statements

import doctors from "../LandingPage/doctors.png";
import "../LandingPage/LandingPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer.js";
import Card from "../Card/Card.js";
import Modal from "../Modals/Modal.js";
import { useState } from "react";
import PatientCaring from "../PatientCaring/PatientCaring.js";
import FAQ from "../Questions/FAQ.js";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const openModal1 = () => {
    setIsModalOpen1(true);
  };

  const onClose = () => {
    setIsModalOpen1(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay1")) {
      onClose();
    }
  };
  return (
    <>
      <header>
        <span
          className="header"
          style={{
            display: "inline-block",
            fontSize: "20px",
            backgroundColorcolor: " #F0F0F0",
            marginTop: "5px",
          }}
        >
          {" "}
          Home{" "}
        </span>
      </header>

      <div
        style={{ background: "#2AA7FF", height: "40px", textAlign: "center" }}
      >
        <p style={{ paddingTop: "10px", color: "#ffffff", minWidth:"100vw", height:"21px"}}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>

      <div className={`section1 ${isModalOpen1 ? "blur" : ""}`}>
        <Navbar />

        <main className="main">
          <div className="container">
            <div className="article1 ">
              <span className="typing-effect" style={{ color: "#102851" }}>
                Skip the travel! Find Online <br />
                <span className="text">
                  Medical <span style={{ color: "#2AA7FF" }}>Centers</span>
                </span>
              </span>
            </div>
            <div className="article2">
              <span className="text2">
                Connect instantly with a 24x7 specialist or choose to video
                visit a particular doctor.
              </span>
            </div>
            <button className="find-center" onClick={openModal1}>
              Find Centers
            </button>
          </div>
          <div className="img">
            <img src={doctors} style={{ width: "480px" }} alt="Doctors" />
          </div>
        </main>
      </div>
      {isModalOpen1 && (
        <div className="modal-overlay1" onClick={handleOverlayClick}>
          <div className="modal-content1">
            <Modal />
          </div>
        </div>
      )}
      <Card />
      <PatientCaring />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
