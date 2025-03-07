import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
    {/* <button>Add to card</button> */}
      <div className="navbar_container">
        <div className="nav_logo">
         <Link to={"/"}><img src="./media/Kotsuwa.jpg" alt="logo" /></Link>
        </div>
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

          <div className="input_search">
            <div className="search_container-nav">
              <i>
                <IoSearchOutline />
              </i>
              <input type="search" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

