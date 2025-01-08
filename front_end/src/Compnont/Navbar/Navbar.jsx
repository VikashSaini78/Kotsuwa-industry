import "./Navbar.css"
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };
   
  function hendalvalue(e){
    e.preventDefault()
   }
 
 
    return ( 
        <>
           <div className="full_navcntainer">
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

           </div>

      <div className="navbar_container">
      <div className="nav_logo">
        <img src="./media/sekawati-logo.jpg" alt="sekhawati logo" />
      </div>
      <div className="menu_toggle" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`contents ${isMenuOpen ? "open" : ""}`}>
        <div className="li_contents">
         <li className="home" > <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/customise">Customise</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </div>
        <div className="input_search">
          {/* <input
            type="search"
            className="form-control"
            placeholder="Search"
          /> */}
          <form className="form" onSubmit={hendalvalue}>
    <button>
      <svg
        width={17}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="search"
      >
        <path
          d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
          stroke="currentColor"
          strokeWidth="1.333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <input
      className="input"
      placeholder="Type your text"
      required=""
      type="text"
    />
  </form>
        </div>
      </div>
    </div>

{/* slider */}



        </>
     );
}

export default Navbar;






