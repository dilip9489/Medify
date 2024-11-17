 
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
  
 
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedicalCenters from './components/MedicalCenters/MedicalCenters';
import MyBookings from './components/MyBookings/MyBookings';

function App() {
  
  return (
    <Router>
       <Routes>
                <Route path="/" element={<LandingPage />} />
                  
              <Route path="/medical-centers" element={<MedicalCenters />}/>
              <Route path="/my-bookings" element={<MyBookings />} />
              
            </Routes>
    </Router>
  );
}

export default App;
