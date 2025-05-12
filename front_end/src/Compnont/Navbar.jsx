import { Link, useLocation } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Navbar() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector(".navbar_container");
      if (navbar && !navbar.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // add to card 

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCount(cart.length);
    window.dispatchEvent(new Event("cartUpdated"));
  }, [location]); // update count when route changes

  // nav fix 
useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* <button>Add to card</button> */}
      <div className={`navbar_container ${isSticky ? "sticky_navbar" : ""}`}>

        <div className="nav_logo">
          <Link to={"/"}>
            <img src="./media/Kotsuwa.jpg" alt="logo" />
          </Link>
        </div>
      


          <div className="nav_menu-container">
            <div className="menu_toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
                 <div className={`contents ${isMenuOpen ? "open" : ""}`}>
          <div className="li_contents">
            <li className="home" onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li> 
            <li onClick={closeMenu}>
              <Link to="/about">About us</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/catlog">Catalog</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/customise">Customise</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>

          {/* <div className="input_search">
            <div className="search_container-nav">
              <i>
                <IoSearchOutline />
              </i>
              <input type="search" />
            </div>
          </div> */}
        </div>

        {/* add to card */}

        <div className="Add_to_card-button">
          <Link className="link" to="/shopcard">
            <i>
              <FaCartPlus />
              <span>{count}</span>
            </i>
          </Link>
        </div>
          </div>
      </div>
    </>
  );
}

export default Navbar;
