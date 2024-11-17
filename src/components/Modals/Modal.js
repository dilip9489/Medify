
import React from 'react'
import { useState,useEffect } from 'react'
import '../Modals/Modal.css'
import ambulance from '../Modals/Ambulance.png'
import doctor from '../Modals/Doctor.png'
import drugstore from '../Modals/Drugstore (2).png'
import e from '../Modals/e.png'
import hospital from '../Modals/Hospital.png'
import { FaSearch } from 'react-icons/fa';
import   { getStates, getCities } from '../../services/api.js';
import { useNavigate } from 'react-router-dom';




const Modal=( )=>{

    const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // getStates().then(setStates);
    // or
    getStates().then((data) => setStates(data))
  }, []);
  
  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    const cities = await getCities(state);
    setCities(cities);
    
  };
  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
        alert('Please select both state and city.');
        return;
    }
    navigate('/medical-centers', { state: { state: selectedState, city: selectedCity } });
};
   
     
     

  

    return (
      <div class="search-container">
        <div class="search-bar">
          <div className="search-input-container">
            <div className="search-icon-container">
              <FaSearch className="search-icon" />
              <select
                className="search-input"
                onChange={handleStateChange} value={selectedState}
              >
                <option value="">Select State</option>
                {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
              </select>
            </div>
          </div>

          {/* City Dropdown */}
          <div className="search-input-container">
            <div className="search-icon-container">
              <FaSearch className="search-icon" />
              <select
                className="search-input"
                onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}
                disabled={!selectedState} // Disable until a state is selected
              >
                <option value="">Select City</option>
                {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
              </select>
            </div>
          </div>
          <button class="search-button"   onClick={handleSearch}>
            <FaSearch />
            <span>Search</span>
          </button>
        </div>
        <h2 class="section-title">You may be looking for</h2>
        <div class="category-container">
          <div class="category-item">
            <img src={doctor} alt="Doctors" />
            <p>Doctors</p>
          </div>
          <div class="category-item">
            <img src={drugstore} alt="Labs" />
            <p>Labs</p>
          </div>
          <div class="category-item active">
            <img src={hospital} alt="Hospitals" />
            <p>Hospitals</p>
          </div>
          <div class="category-item">
            <img src={e} alt="Medical Store" />
            <p>Medical Store</p>
          </div>
          <div class="category-item">
            <img src={ambulance} alt="Ambulance" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    );
}
export default Modal