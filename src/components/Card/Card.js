import React from "react";
import '../Card/Card.css'
import  drugstore from '../Card/Images/Drugstore.png'
import  BloodSample from '../Card/Images/Blood Sample.png'
import  heartRate from '../Card/Images/Heart Rate Monitor.png'
import  heartrate from '../Card/Images/Heart Rate.png'
import  immune from '../Card/Images/Immune.png'
import  stethoscope from '../Card/Images/Stethoscope.png'
import  xRay from '../Card/Images/X-Ray.png'

const Card=()=>{

    return(
        <div className="card">
             
            <h1 style={{textAlign:"center"}}>Find By Specialisation</h1>
            <div className="card-item">
            <div className="card-list">
                <img style={{height:"80px", width:"80px", marginTop:"15px"}}src={drugstore} alt="drugstore"/>
                <h3 >Dentistry</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px",marginTop:"15px"}}src={stethoscope} alt="primaryCare"/>
                <h3 >Primary Care</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px",marginTop:"15px"}}src={heartrate} alt="cardiology"/>
                <h3 >Cardiology</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px",marginTop:"15px"}}src={heartRate} alt="MRI"/>
                <h3 >MRI Resonance</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px"}}src={BloodSample} alt="bloodSample"/>
                <h3 >Blood Test</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px",marginTop:"15px"}}src={immune} alt="Immune"/>
                <h3 >Immune</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px",marginTop:"15px"}}src={xRay} alt="xRay"/>
                <h3 >X-Ray</h3>
            </div>
            <div className="card-list">
                <img style={{height:"80px", width:"80px",marginTop:"15px"}}src={drugstore} alt="laboratory"/>
                <h3 >Laboratory</h3>
            </div>
            </div>
        </div>
    )
}
export default Card