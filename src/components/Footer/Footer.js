import React from 'react'
import footerImg from '../Footer/div.elementor-row.png'
import '../Footer/Footer.css'

const Footer=()=>{

    return(
        <div className='footer'> 
          <div className='footer-img'>
            <img style={{minWidth: "100vw",}}src={footerImg} alt="footerImg"/>
          </div>
          <div className='rights'>
            <p>Copyright ©2024 Surya Nursing Home.com. All Rights Reserved</p>
          </div>
        </div>
    )
}
export default Footer