import React, { useState, useEffect } from 'react';
 import SearchDropdown from '../searchDropdown/SearchDropdown.js';
import Navbar from '../Navbar/Navbar.js';
import "../MedicalCenters/MedicalCenters.css"
import { useNavigate,useLocation } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult.js';
import Footer from '../Footer/Footer.js';
import FAQ from '../Questions/FAQ.js';

const MedicalCenters = ( ) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[selectedCity,setSelectedCity]=useState('')
  const[selectedState,setSelectedState]=useState('')
  let { state, city } = useLocation().state;
//   console.log(state)
   
  const navigate = useNavigate();
   
  const handleChange=(selectedState,selectedCity)=>{
     
    setSelectedState(selectedState)
     setSelectedCity(selectedCity)
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      closeModal();
    }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="find-doctors-page">
      <div className={isModalOpen ? "modal-background-blur" : ""}>
        <header>
          <span
            className="header"
            onClick={navigateToHome}
            style={{
              display: "inline-block",
              fontSize: "20px",
              backgroundColor: "#F0F0F0",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            Home
          </span>
        </header>

        {/* Notification Banner */}
        <div
          style={{ background: "#2AA7FF", height: "40px", textAlign: "center" }}
        >
          <p style={{ paddingTop: "10px", color: "#ffffff" }}>
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </p>
        </div>
        <div className="nav-bar">
          <Navbar openModal={openModal} />
        </div>

        <div className="details"></div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal">
            <SearchDropdown onSearch={handleChange}  />
          </div>
        </div>
      )}
      <div>
        <SearchResult
          state={state}
          city={city}
          selectedState={selectedState}
          selectedCity={selectedCity}
        />
      </div>
      <div style={{ backgroundColor: "#ffffff", marginTop: "30px" }}>
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default MedicalCenters;