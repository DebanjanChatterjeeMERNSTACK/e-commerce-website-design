import "./Order_list.css";
import img from "../../assets/image.jpg";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import {
  FaMapMarkerAlt,
  FaCity,
  FaLocationArrow,
  FaMapPin,
  FaLandmark,
  FaMailBulk,
  FaFlag,
} from "react-icons/fa";
const Order_list = () => {
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const str = "Imported Popcorn Stylish Shirts For Mens And Female";
  return (
    <>
      <div className="Cart_details_contaner">
        <div className="Cart_details_maxwidth">
          <div className="order_details_flex">
           
              {[1, 2, 3, 4, 5].map((e) => {
                return (
                  <>
                    <div className="order_product_contant">
                      <img
                        src={img}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "5px",
                        }}
                      />
                      <div className="cart_product_contant_remove">
                        <p style={{ color: "green", fontWeight: 500 }}>
                          Delivery
                        </p>
                        <p>{str.slice(0, 51)}...</p>
                        <div className="cart_product_price">
                          <p>$555</p>
                          <p>
                            <del>$222</del>{" "}
                          </p>
                          <p>5%</p>
                        </div>
                        <div className="cart_product_price_data">
                          <p>Size: Free Size</p>
                          <p>Qty: 2</p>
                        </div>
                      </div>
                      <IoIosArrowForward
                        style={{ fontSize: "30px", color: "grey" }}
                      />
                    </div>
                  </>
                );
              })}
            </div>
            {/* <div className="cart_product_cal">
              <div className="address-card">
                <h2 className="address-title">📍 User Address Details</h2>

                <div className="address-section">
                  <FaMapMarkerAlt className="address-icon" />
                  <div className="address-text">
                    <span className="label">Address:</span>
                    <span>
                      Malancha Taki Road, Kazipara, Barasat, Kolkata-700124
                    </span>
                  </div>
                </div>

                <div className="address-section">
                  <FaLandmark className="address-icon" />
                  <div className="address-text">
                    <span className="label">Nearest Landmark:</span>
                    <span>Malancha Kali Mondir</span>
                  </div>
                </div>

                <div className="address-section">
                  <FaCity className="address-icon" />
                  <div className="address-text">
                    <span className="label">City:</span>
                    <span>Barasat</span>
                  </div>
                </div>

                <div className="address-section">
                  <FaFlag className="address-icon" />
                  <div className="address-text">
                    <span className="label">State:</span>
                    <span>West Bengal</span>
                  </div>
                </div>

                <div className="address-section">
                  <FaLocationArrow className="address-icon" />
                  <div className="address-text">
                    <span className="label">Police Station (P.S):</span>
                    <span>Barasat</span>
                  </div>
                </div>

                <div className="address-section">
                  <FaMailBulk className="address-icon" />
                  <div className="address-text">
                    <span className="label">Post Office (P.O):</span>
                    <span>Kazipara</span>
                  </div>
                </div>

                <div className="address-section">
                  <FaMapPin className="address-icon" />
                  <div className="address-text">
                    <span className="label">Pin Code:</span>
                    <span>1234567</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
    </>
  );
};
export default Order_list;
