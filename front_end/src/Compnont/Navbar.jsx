// import "../Compnont/"
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

   const closeMenu = () => {
     setIsMenuOpen(false);
   };

    return ( 
        <>
           {/* <div className="full_navcntainer">
           <div className="navcontant_container">
           <div className="address_div">
           <p ><i><IoLocationOutline /></i>Sitapura, Jaipur, Rajasthan</p>
           <li className="b-lf">
            <a href="#"/>
          </li>
           <p> <i><FaRegCircleCheck /></i>GST No. 08ADSPG8203G1ZG</p>
           </div>


              <div className="nav_contact_number">
              <div>
                <p className="nav_number"><img src="./media/phone..png" alt=""/> +91 9829010564</p>
                <p className="nav_email"><i><MdOutlineEmail /></i> Send Email</p>
                <p className="nav_Enquiry"><i><HiOutlineShoppingBag /> 
                  </i>
               
                 Enquiry</p>
              </div>

              </div>
           </div>

           </div> */}

      <div className="navbar_container">
      <div className="nav_logo">
        <img src="./media/Kotsuwa.jpg" alt=" logo" />
      </div>
      <div className="menu_toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`contents ${isMenuOpen ? "open" : ""}`}>
        <div className="li_contents">
          <li className="home" onClick={closeMenu}> <Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/about">About us</Link></li>
          <li onClick={closeMenu}><Link to="/catlog">Catalog</Link></li>
          <li onClick={closeMenu}><Link to="/customise">Customise</Link></li>
          <li onClick={closeMenu}><Link to="/contact">Contact Us</Link></li>
        </div>

        <div className="input_search">
           <div className="search_container-nav">
           <i><IoSearchOutline /></i>
           <input type="search"/>
           </div>
        </div>
      </div>
    </div>

        </>
     );
}

export default Navbar;
