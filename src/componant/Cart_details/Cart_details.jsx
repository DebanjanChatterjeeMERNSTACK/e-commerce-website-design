import "./Cart_details.css";
import img from "../../assets/image.jpg";
import { useState } from "react";
import { FaMoneyBillWave, FaCreditCard } from "react-icons/fa";

const Cart_details = () => {
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const str = "Imported Popcorn Stylish Shirts For Mens And Female";
  return (
    <>
      <div className="Cart_details_contaner">
        <div className="Cart_details_maxwidth">
          <div className="Cart_details_flex">
            <div className="cart_product">
              {[1, 2, 3, 4, 5, 6].map((e) => {
                return (
                  <>
                    <div className="cart_product_contant">
                      <img
                        src={img}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "5px",
                        }}
                      />
                      <div className="cart_product_contant_remove">
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
                        <button>X Remove</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="cart_product_cal">
              <div className="cart_product_cal_heading">
                <h3>Price Details (4 Items)</h3>
                <div className="cart_product_cal_flex">
                  <p>Total Product Price</p>
                  <p>+ ₹1590</p>
                </div>
                <div className="cart_product_cal_flex">
                  <p>Delivery</p>
                  <p>+ ₹15</p>
                </div>
                <hr />
                <div className="cart_product_cal_flex">
                  <p>Order Total</p>
                  <p>+ ₹1590</p>
                </div>
                <div className="payment-wrapper">
                  <h3>Choose Payment Method</h3>
                  <div className="payment-options">
                    <label
                      className={`option-card ${
                        selectedMethod === "cash" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="cash"
                        checked={selectedMethod === "cash"}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                      />
                      <span className="radio-dot"></span>
                      <FaMoneyBillWave className="icon" />
                      <span className="label-text">Cash</span>
                    </label>

                    <label
                      className={`option-card ${
                        selectedMethod === "online" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        checked={selectedMethod === "online"}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                      />
                      <span className="radio-dot"></span>
                      <FaCreditCard className="icon" />
                      <span className="label-text">Online</span>
                    </label>
                  </div>
                </div>
              </div>
              <button className="button3">Payment Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart_details;
