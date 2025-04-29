import React, { useState } from "react";
import "./Product_list.css";
import Card from "../card/Card";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const Product_list = () => {
  const [toggal, settoggal] = useState(false);
  const handleClick = () => {
    if (toggal) {
      settoggal(false);
    } else {
      settoggal(true);
    }
  };
  return (
    <>
      <div className="product_list_contaner">
        <div className="product_list_maxwidth">
          <div className={`${toggal ?"product_filter_none": "product_filter"}`}>
            <div>
              <h3>Caterory</h3>
              {[1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <label className="fancy-checkbox" key={i}>
                    <input type="checkbox" />
                    <span className="fancy-checkmark"></span>
                    Conditions
                  </label>
                );
              })}
            </div>
            <div>
              <h3>Brand</h3>
              {[1, 2, 3, 4, 5].map((e, i) => {
                return (
                  <label className="fancy-checkbox" key={i}>
                    <input type="checkbox" />
                    <span className="fancy-checkmark"></span>
                    Puma
                  </label>
                );
              })}
            </div>
            <div>
              <h3>Price</h3>
              <div className="range-wrapper">
                <label htmlFor="priceRange" className="range-label">
                  ₹<span id="priceValue">0</span> - ₹
                  <span id="priceValue">100</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value="50"
                  className="custom-range"
                  id="priceRange"
                  //   onChange={handleChange}
                />
              </div>
            </div>
            <button className="button2">Clear All</button>
          </div>
          <div className="product_list">
            <div className="product_list_sorting">
              <MdOutlineFormatListBulleted
                style={{
                  fontSize: "30px",
                  marginTop: "5px",
                }}
                className="burger_icon"
                onClick={handleClick}
              />
            </div>
            <div className="product_list_flex">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((e, i) => {
                return (
                  <div key={i}>
                    <Card />
                  </div>
                );
              })}
            </div>
            <div className="pagination">
              <button className="page-btn">«</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <span className="dots">...</span>
              <button className="page-btn">10</button>
              <button className="page-btn">»</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product_list;
