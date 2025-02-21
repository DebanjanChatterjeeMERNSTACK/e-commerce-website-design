import "./Menu.css";
import { IoHomeOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { TbBrandBlogger } from "react-icons/tb";
import { LuContact } from "react-icons/lu";

const Menu = () => {
  return (
    <>
      <div className="menu_contaner">
        <div className="menu_maxwidh">
          <div className="menu_flex">
            <div className="menu_icon_flex">
              <IoHomeOutline style={{ color: "#5CAF90", fontSize: "18px" }} />
              <p>Home</p>
            </div>
            <div className="menu_icon_flex">
              <BsBoxSeam style={{ color: "#5CAF90", fontSize: "18px" }} />
              <p>Product</p>
            </div>
            <div className="menu_icon_flex">
              <TbBrandBlogger style={{ color: "#5CAF90", fontSize: "18px" }} />
              <p>Blog</p>
            </div>
            <div className="menu_icon_flex">
              <LuContact style={{ color: "#5CAF90", fontSize: "18px" }} />
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
