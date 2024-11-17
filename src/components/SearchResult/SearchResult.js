 
import React, { useEffect, useState } from "react";
import { getMedicalCenters } from "../../services/api.js";
import "../SearchResult/SearchResult.css";
import offerImg from "../SearchResult/sensodyne_dweb.png.png";
import hospitalIcon from "../SearchResult/div.u-pos-has.png";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { generateDates } from "../../generateDates.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
// import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

 

const SearchResult = ({ state, city, selectedState, selectedCity }) => {
  const [dates, setDates] = useState(generateDates());
  const [selectedDate, setSelectedDate] = useState(dates[0].date);

  const [selectedSlot, setSelectedSlot] = useState("");

  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  const [more, setMore] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState(null);

  const [bookingData, setBookingData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("appointments"));
    return Array.isArray(savedData) ? savedData : [];
  });

  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedSlot("");
  };

  const handleTimeSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  useEffect(() => {
    const fetchCenters = async () => {
      setLoading(true);

      try {
        const data = await getMedicalCenters(
          state,
          city,
          selectedState,
          selectedCity || null
        );
        setCenters(data);
      } catch (error) {
        console.error("Error fetching medical centers:", error);
      }

      setLoading(false);
    };

    if (state) {
      fetchCenters();
    }
  }, [state, city]);

  const handleBookAppointment = (center) => {
    setSelectedCenter(center);
  };
  console.log("Selected Center:", selectedCenter);

  const handleConfirmAppointment = (selectedDate, selectedSlot) => {
    const newBooking = {
      center: selectedCenter,
      date: selectedDate,
      time: selectedSlot,
    };
    const updatedBookingData = [
      ...bookingData,
      newBooking,
    ];
    setBookingData(updatedBookingData);
    localStorage.setItem("appointments", JSON.stringify(updatedBookingData));
    alert("Appointment booked successfully!");
    setSelectedCenter(null);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="search-results">
      <div className="centers-list">
        <h1 style={{ marginLeft: "100px" }}>
          {centers.length} Medical Centers in {city}, {state}
        </h1>
        <p
          style={{
            marginLeft: "120px",
            font: "Poppins",
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          Book appointments with minimum wait-time & verified doctor details
        </p>
        {centers.map((center) => (
          <div key={center["Provider ID"]} className="center-card">
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
                />{" "}
              </span>
              <div className="hospital-details">
                <h3 style={{marginBottom:"5px"}}>{center["Hospital Name"]}</h3>
                <p>{center.Address}</p>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setMore(!more)}
                >
                  more
                </span>
                {more && (
                  <p>
                    {center.City}, {center.State} {center["ZIP Code"]}
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
                    {center["Hospital overall rating"]}
                  </span>
                  <button
                    className="book-button"
                    onClick={() => handleBookAppointment(center)}
                  >
                    Book Appointment
                  </button>
                  {selectedCenter===center && (
        <div className="appointment-container">
        {/* Date Selector */}
        <div className="date-selector">
          <Swiper slidesPerView={3} spaceBetween={10} modules={[Navigation, Scrollbar]} navigation={{
    prevEl: '.custom-prev',
    nextEl: '.custom-next',
  }}
    scrollbar={{ draggable: true }} >
            {dates.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`date-card ${
                    selectedDate === item.date ? "active" : ""
                  }`}
                  onClick={() => handleDateClick(item.date)}
                >
                  <h3>{item.date}</h3>
                  <p>{item.slots} Slots Available</p>
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
          <div className="custom-prev"> <FaAngleLeft style={{color:"#2AA7FF"}}/></div>
            <div className="custom-next"><FaAngleRight style={{color:"#2AA7FF"}}/></div>
        </div>
  
         
        {selectedDate && (
          <div className="time-slots">
            {Object.entries(timeSlots).map(([period, slots]) => (
              <div key={period} className="time-period">
                <h4 style={{height:"17px",fontSize:"14px",font:"Lato"}}>{period}</h4>
                <div className="slots">
                  {slots.map((slot, index) => (
                    <button
                      key={index}
                      className={`slot ${
                        selectedSlot === slot ? "selected" : ""
                      }`}
                      onClick={() => handleTimeSlotClick(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                  
                </div>
               
              </div>
         
            ))}
             
          </div>
           
        )}
        <button
    className="confirm-button"
    onClick={() => handleConfirmAppointment(selectedDate, selectedSlot)}
  >
    Confirm Appointment
  </button>
      </div>
   
      )}
                </div>
              </div>
              
            </div>
            
          </div>
        ))}
        
      </div>

      <img className="offer" src={offerImg} alt="offerImg" />
    </div>
  );
};

export default SearchResult;
