import "./Main_header.css";
import img from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Main_header = () => {
  return (
    <>
      <div className="Main_header_contaner">
        <div className="Main_header_maxwtdth">
          <div className="Main_header_flex">
            <div className="">
              <NavLink to={"/"}>
              <img src={img} style={{ width: "150px" }} />
              </NavLink>
            </div>
            <NavLink to={"/search"}>
            <div className="seartch_flex">
              <p>Search Product....</p>
              <IoSearchOutline style={{ color: "#4b5966" }} />
            </div>
            </NavLink>
            <div className="login_flex">
              <LuLogIn style={{ color: "#5CAF90", fontSize: "18px" }} />
             <NavLink to={"/login"}><p>Login</p></NavLink>
            </div>
            <div className="login_flex">
              <FaRegUser style={{ color: "#5CAF90", fontSize: "18px" }} />
              <div className="dropdown">
                <button className="dropbtn">Profile</button>
                <div className="dropdown-content">
                <NavLink to={"/register"}>Registration</NavLink>
                <NavLink to={"/"}>Logout</NavLink>
                <NavLink to={"/profile"}>Your Profile</NavLink>
                <NavLink to={"/order"}>Your Order</NavLink>

                </div>
              </div>
            </div>
            <div className="login_flex">
              <BiShoppingBag style={{ color: "#5CAF90", fontSize: "18px" }} />
              <NavLink to={"/cart"}><p>10-Item</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main_header;
