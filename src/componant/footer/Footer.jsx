import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer_contaner">
        <div className="footer_maxwidth">
          <div className="footer_flex">
            <div className="footer_About">
              <NavLink to={"/"}>
                {" "}
                <img src={logo} />
              </NavLink>
              <p>© 2025, All Rights Reserved.</p>
            </div>
            <div className="Quick_links">
              <h4>Quick Links</h4>
              <NavLink to={"/"}>
                {" "}
                <p>Home</p>
              </NavLink>
              <NavLink to={"/about"}>
                <p>About</p>
              </NavLink>
              <NavLink to={"/product"}>
                <p>Product</p>
              </NavLink>
              <NavLink to={"/blog"}>
                {" "}
                <p>Blog</p>
              </NavLink>
              <NavLink to={"/contact"}>
                {" "}
                <p>Contact Us</p>
              </NavLink>
            </div>
            <div className="Quick_links">
              <h4>Policy Links</h4>
              <NavLink to={"/terms-and-Conditions"}>
                {" "}
                <p>Terms-and-Conditions</p>
              </NavLink>
              <NavLink to={"/privacy-policy"}>
                {" "}
                <p>Privacy-policy</p>
              </NavLink>
              <NavLink to={"/shipping-policy"}>
                {" "}
                <p>Shipping-policy</p>
              </NavLink>
              <NavLink to={"/refund-policy"}>
                {" "}
                <p>Refund-policy</p>
              </NavLink>
              <NavLink to={"/faq"}>
                {" "}
                <p>FAQ</p>
              </NavLink>
            </div>
            <div className="Quick_links">
              <h4>Social Links</h4>
              <div className="contact_social">
                <IoLocationOutline style={{ color: "#5CAF90" }} />
                <h6>Barasat</h6>
              </div>
              <div className="contact_social">
                <HiOutlineMail style={{ color: "#5CAF90" }} />
                <h6>text@gmail.com</h6>
              </div>
              <div className="contact_social">
                <MdOutlineLocalPhone style={{ color: "#5CAF90" }} />
                <h6>+91 1234567891</h6>
              </div>
              <div className="contact_social">
                <MdOutlineLocalPhone style={{ color: "#5CAF90" }} />
                <h6>+91 1234567891</h6>
              </div>
              <div className="contact_social">
                <FaFacebookSquare
                  style={{ fontSize: "25px", color: "#2D3748" }}
                />
                <FaTwitterSquare
                  style={{ fontSize: "25px", color: "#2D3748" }}
                />
                <FaLinkedin style={{ fontSize: "25px", color: "#2D3748" }} />
                <FaInstagramSquare
                  style={{ fontSize: "25px", color: "#2D3748" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
