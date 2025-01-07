import React from 'react'
import "./Footer.css"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
function Footer() {
  return (
    <>
      <footer>

      <div className='container-xl'>
      <div className='row'>
      <div className='col-md-3'>
         <div className='footer_logo'>
         <img src='./media/sekawati-logo.jpg' alt=''/>
         <p>Manufacturer and exporter of all kinds of cotton and canvas hand bags.</p>
         </div>
      </div>

      <div className='col-md-3'>
      <div className='Catalog_div'>
      <h6>Catalog</h6>
     <p>Cotton Tote bags</p>
     <p>Canvas Tote bags</p>
     <p>Organic Canvas Bags</p>
     <p>Denim Collection</p>
     <p>Pouches Collection</p>

      </div>
      </div>
      <div className='col-md-3'>
      <div className='Catalog_div'>
      <h6>  Profile</h6>
     <p>Corporate Presentation</p>
     <p>Corporate Video</p>
     <p>Corporate Brochure</p>
     <p>Sitemap</p>
     <p>Contact Us</p>
   
      </div>
      </div>
      <div className='col-md-3'>
      <div className='Catalog_div'>
      <h6> CONTACT INFO</h6>
     <p>Dinesh Gupta (President)</p>
     <p>G-82, Garment Zone,Sitapura Industrial Area, Tonk Road Jaipur - 302022, Rajasthan, India</p>
     <p>9829010564</p>

      </div>
      </div>

      </div>



         <div className='footer_icons-div'>
         <div className='socal_media-icons'>
         <i><CiFacebook/></i>
         <i><FaGoogle/></i>
         <i><FaLinkedin/></i>
         <i><CiTwitter/></i>
         </div>
         <p>
         ©2020, SEKAWATI
         WEBSITE DESIGN & DEVELOPED BY : A R INFOTECH
         </p>
         <div>
         <img src='./media/payment.png' alt=''/>
            
         </div>

          </div>



      </div>
      </footer>
    </>
  )
}

export default Footer
