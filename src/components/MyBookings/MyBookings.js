import React from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import hospitalIcon from "../SearchResult/div.u-pos-has.png";
import   { useEffect, useState } from "react";
import '../MyBookings/MyBookings.css'
import offerImg from '../SearchResult/sensodyne_dweb.png.png'
import Footer from "../Footer/Footer";

const MyBookings = () => {
    const [bookings, setBookings] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("appointments"));
        return Array.isArray(savedData) ? savedData : [];
      });
  console.log(bookings);
  const [more, setMore] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState(null);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <header onClick={navigateToHome}>
        <span
          className="header"
          style={{
            display: "inline-block",
            fontSize: "20px",
            backgroundColor: "#F0F0F0",
            marginTop: "5px",
          }}
        >
          Home
        </span>
      </header>

      <div
        style={{ background: "#2AA7FF", height: "40px", textAlign: "center" }}
      >
        <p style={{ paddingTop: "10px", color: "#ffffff" }}>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>
      <Navbar />

      <div className="details">
        <h3 style={{ marginLeft: "100px" }}>My Bookings</h3>
      </div>

      <div className="search-results">
        <div className="centers-list">
          {bookings.map((center) => (
            <div key={center.center["Provider ID"]} className="center-card">
             
              
              <div className="hospital-img">
                <span
                  style={{
                    display: "inline-block",
                    width: "140px",
                    height: "140px",
                  }}
                >
                  <img
                    className="hospitalIcon"
                    src={hospitalIcon}
                    alt="hospitalIcon"
                  />
                </span>
                
                <div className="hospital-details">
                <div className="date-time">
              <span className="time">{center.time}</span>
              <span className="date">{center.date}</span>
              </div>
                  <h3 style={{ marginBottom: "5px" }}>
                    {center.center["Hospital Name"]}
                  </h3>
                 
                  <p>{center.center.Address}</p>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setMore(!more)}
                  >
                    more
                  </span>
                  {more && (
                    <p>
                      {center.center.City}, {center.center.State} {center.center["ZIP Code"]}
                    </p>
                  )}
                  <div className="rating">
                    <span
                      style={{
                        display: "inline-block",
                        background: "#00A500",
                        width: "40px",
                        height: "20px",
                        opacity: "0.5px",
                        borderRadius: "5px",
                      }}
                    >
                      <FaThumbsUp color="#ffffff" size={10} />
                      {center.center["Hospital overall rating"]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img className="offer" src={offerImg} alt="offerImg" />
      </div>
      <Footer/>
    </>
  );
};

export default MyBookings;
