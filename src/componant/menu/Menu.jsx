import "./Menu.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { TbBrandBlogger } from "react-icons/tb";
import { LuContact } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu_contaner">
        <div className="menu_maxwidh">
          <div className="menu_flex">
            <div className="menu_icon_flex">
              <IoHomeOutline style={{ color: "#5CAF90", fontSize: "18px" }} />
              <NavLink to={"/"}>
              <p>Home</p>
              </NavLink>
            </div>
            <div className="menu_icon_flex">
              <BsBoxSeam style={{ color: "#5CAF90", fontSize: "18px" }} />
              <NavLink to={"/product"}>
              <p>Product</p>
              </NavLink>
            </div>
            <div className="menu_icon_flex">
              <TbBrandBlogger style={{ color: "#5CAF90", fontSize: "18px" }} />
              <NavLink to={"/blog"}>
              <p>Blog</p>
              </NavLink>
            </div>
            <div className="menu_icon_flex">
              <LuContact style={{ color: "#5CAF90", fontSize: "18px" }} />
              <NavLink to={"/contact"}>
              <p>Contact</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
