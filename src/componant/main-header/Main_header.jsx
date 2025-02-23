import "./Main_header.css";
import img from "../../assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { LuLogIn } from "react-icons/lu";
import { BiShoppingBag } from "react-icons/bi";

const Main_header = () => {
  return (
    <>
      <div className="Main_header_contaner">
        <div className="Main_header_maxwtdth">
          <div className="Main_header_flex">
            <div className="">
              <img src={img} style={{ width: "150px" }} />
            </div>
            <div className="seartch_flex">
              <p>Search Product....</p>
              <IoSearchOutline style={{ color: "#4b5966" }} />
            </div>
            <div className="login_flex">
              <LuLogIn style={{ color: "#5CAF90", fontSize: "18px" }} />
              <p>Login</p>
            </div>
            <div className="login_flex">
              <FaRegUser style={{ color: "#5CAF90", fontSize: "18px" }} />
              <div class="dropdown">
                <button class="dropbtn">Profile</button>
                <div class="dropdown-content">
                  <a href="#">Registration</a>
                  <a href="#">Logout</a>
                  <a href="#">Your Profile</a>
                  <a href="#">Your Order</a>

                </div>
              </div>
            </div>
            <div className="login_flex">
              <BiShoppingBag style={{ color: "#5CAF90", fontSize: "18px" }} />
              <p>10-Item</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main_header;
