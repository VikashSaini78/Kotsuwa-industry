import React from 'react'
import "./Footer.css"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer>
      <div className='container'>
      <div className='row'>
      <div className='col-md-3'>
         <div className='footer_logo'>
         <img src='./media/Kotsuwa.jpg' alt=''/>
         <p>Manufacturer and exporter of all kinds of cotton and canvas hand bags.</p>
         </div>
      </div>
 
      <div className='col-md-3'>
      <div className='Catalog_div'>
      <h6>Catalog</h6>
      <Link className='fotterlink' to={"/catlog"}><p><img src='./media/footericon.jpg'alt=''/> Cotton Tote bags</p></Link>
      <Link className='fotterlink' to={"/catlog"}><p><img src='./media/footericon.jpg'alt=''/> Canvas Tote bags</p></Link>
      <Link className='fotterlink' to={"/catlog"}><p><img src='./media/footericon.jpg'alt=''/> Organic Canvas Bags</p></Link>
      <Link className='fotterlink' to={"/catlog"}><p><img src='./media/footericon.jpg'alt=''/> Denim Collection</p></Link>
      <Link className='fotterlink' to={"/catlog"}> <p><img src='./media/footericon.jpg'alt=''/> Pouches Collection</p></Link>
     
     
     
    

      </div>
      </div>
      <div className='col-md-3'>
      <div className='Catalog_div'>
      <h6>  Profile</h6>
      <Link></Link>
     <p><img src='./media/footericon.jpg'alt=''/> Corporate Presentation</p>
     <p><img src='./media/footericon.jpg'alt=''/> Corporate Video</p>
     <p><img src='./media/footericon.jpg'alt=''/> Corporate Brochure</p>
     <p><img src='./media/footericon.jpg'alt=''/> Sitemap</p>
   
      </div>
      </div>
      <div className='col-md-3'>
      <div className='Catalog_div'>
      <h6>Contact Info</h6>
     <p><img src='./media/footericon.jpg'alt=''/> Irfan Ali Ansari (President)</p>
     <p><img src='./media/footericon.jpg'alt=''/> 117B, Ram Nagar,Toll Tax<br/>
     &nbsp; &nbsp; &nbsp;Tehsil Sanganer, Jaipur <br/>
     &nbsp; &nbsp; &nbsp;Raj. ,302022</p>
     <p><img src='./media/footericon.jpg'alt=''/> 70-234-70-489</p>
     <p><img src='./media/footericon.jpg'alt='' /><Link className='footer_link'>kotsuwaindustry@gmail.com</Link> </p>

      </div>
      </div>

      </div>
      </div>

       
       <div className='footer_icons-div'>
       <div className='container'>
         <div className='footer_cncolom'>
         <div className='socal_media-icons'>
         <i><CiFacebook/></i>
         <i><FaGoogle/></i>
         <Link to={"https://www.linkedin.com/in/vikash-saini-a6448226b/"} target='blank'><i><FaLinkedin/></i></Link>
         <i><CiTwitter/></i>
         </div>
         <p>
         ©2025, KOTSUWA INDUSTRY
         WEBSITE DESIGN & DEVELOPED BY : <Link className='link-insta' to={"https://www.instagram.com/____vicky76__?igsh=MW1rNWs1Z3VtNm9meA%3D%3D"} target='blanck'>vicky76</Link>
         </p>
         <div>
         <img src='./media/payment.png' alt=''/>
            
         </div>
         </div>

          </div>
       </div>

      </footer>
    </>
  )
}

export default Footer
