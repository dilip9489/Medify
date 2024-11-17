
import '../Navbar/Navbar.css'
import logo from '../Navbar/Group 6.svg';
import { useNavigate,useLocation } from 'react-router-dom';
const Navbar = ({ openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFindDoctorsClick = () => {
    if (location.pathname === "/medical-centers") {
       
      openModal();
    } else {
      
      alert(`please click on the 'Find Centers' button and fill the required details to navigate to Medical Centers page`);
    }
  };
const handleMyBokingsClick=()=>{
  navigate('/my-bookings')

}
const navigateToHome = () => {
  navigate("/");
};

  return (
    <nav className="medify">
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          style={{
            background: "#2AA8FF",
            width: "23px",
            height: "23px",
            display: "inline-block",
            borderRadius: "5px",
          }}
        />
        <span className="content" onClick={navigateToHome } >Medify</span>
      </div>
      <div className="list">
        <ul className="items">
          <li onClick={handleFindDoctorsClick}> Find Doctors </li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
        </ul>
        <button className="booking" onClick={handleMyBokingsClick}>My Bookings</button>
      </div>
    </nav>
  );
};

export default Navbar;