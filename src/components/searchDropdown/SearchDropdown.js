import React, { useState, useEffect } from 'react';
import { getStates, getCities } from '../../services/api.js';
import { FaSearch } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
 
import '../searchDropdown/SearchDropdown.css'
 
const SearchDropdown = ( {onSearch}) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
   

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
   
    


  return (
     
       
      <div className="dropdowns">
        
        <select className='select1' onChange={handleStateChange} value={selectedState}>
           
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
         
        
        <select className='select2' onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}  >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
         
       
        <button className='search' onClick={( )=>onSearch(selectedState,selectedCity)}>
             <FaSearch /> 
             <span >Search</span></button>
      </div>
     
  );
};

export default SearchDropdown;
