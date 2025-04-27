import { useState, useEffect } from "react";
import "./Menu.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { TbBrandBlogger } from "react-icons/tb";
import { LuContact, LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 740);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = (
    <>
      <div className="menu_icon_flex">
        <IoHomeOutline style={{ color: "#5CAF90", fontSize: "18px" }} />
        <NavLink to={"/"} onClick={() => setMenuOpen(false)}>
          <p>Home</p>
        </NavLink>
      </div>
      <div className="menu_icon_flex">
        <BsBoxSeam style={{ color: "#5CAF90", fontSize: "18px" }} />
        <NavLink to={"/product"} onClick={() => setMenuOpen(false)}>
          <p>Product</p>
        </NavLink>
      </div>
      <div className="menu_icon_flex">
        <TbBrandBlogger style={{ color: "#5CAF90", fontSize: "18px" }} />
        <NavLink to={"/blog"} onClick={() => setMenuOpen(false)}>
          <p>Blog</p>
        </NavLink>
      </div>
      <div className="menu_icon_flex">
        <LuContact style={{ color: "#5CAF90", fontSize: "18px" }} />
        <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>
          <p>Contact</p>
        </NavLink>
      </div>
    </>
  );

  return (
    <>
      <div className="menu_contaner">
        <div className="menu_maxwidh">
          {!isMobile ? (
            <div className="menu_flex">
              {menuItems}
            </div>
          ) : (
            <>
              <div className="mobile_menu_header">
                <button className="hamburger_button" onClick={toggleMenu}>
                  <LuMenu style={{ color: "#5CAF90", fontSize: "24px" }} />
                </button>
              </div>
              {menuOpen && (
                <div className="mobile_menu_items">
                  {menuItems}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;