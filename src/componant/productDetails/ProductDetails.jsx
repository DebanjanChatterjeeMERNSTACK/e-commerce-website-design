import "./ProductDetails.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from "../../assets/2.jpg";
import { FaStar } from "react-icons/fa";

import Slider from "react-slick";
import { useEffect, useState, useRef } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Accordion from "../accordion_product/Accordion";
import Section from "../section_product/Section";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaCircleArrowRight
      className={className}
      style={{
        ...style,
        color: "#5CAF90",
        fontSize: "34px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaCircleArrowLeft
      className={className}
      style={{
        ...style,
        color: "#5CAF90",
        fontSize: "34px",
      }}
      onClick={onClick}
    />
  );
}

const ProductDetails = () => {
  const [color, setcolor] = useState(0);
  const [count, setcount] = useState(1);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settingsMain = {
    asNavFor: nav2,
    ref: slider1,
    arrows: false, // Hide arrows for main slider
  };

  const settingsNav = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      document.querySelectorAll(".slick-slide").forEach((slide, index) => {
        if (index === next) {
          slide.removeAttribute("aria-hidden");
          slide.removeAttribute("inert");
        } else {
          slide.setAttribute("aria-hidden", "true");
          slide.setAttribute("inert", "true"); // Prevent focus
        }
      });
    },
  };

  const handlebackgroundcolor = (id) => {
    setcolor(id);
  };

  const str =
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  return (
    <>
      <div className="product_details_contaner">
        <div className="product_details_maxwidth">
          <div className="product_details_flex">
            <div className="product_details_slide">
              <div className="product_details_slide_width">
                <Slider {...settingsMain}>
                  {[1, 2, 3, 4, 5].map((e, i) => {
                    return (
                      <div key={e}>
                        <img
                          src={img}
                          style={{ width: "450px", height: "400px" }}
                        />
                      </div>
                    );
                  })}
                </Slider>
                <Slider {...settingsNav}>
                  {[1, 2, 3, 4, 5].map((e, i) => {
                    return (
                      <div key={e}>
                        <img
                          src={img}
                          style={{
                            width: "140px",
                            height: "100px",
                            border: " 1px solid rgb(160, 184, 175)",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="product_details_slide_contant">
              <h4>
                Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips
                & Snacks.
              </h4>
              <div className="star_flex">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return (
                    <div key={i}>
                      <FaStar style={{ color: "#F8BF87" }} />
                    </div>
                  );
                })}
              </div>
              <div className="product_details_price_flex">
                <div className="price_flex">
                  <p>$664.00</p>
                  <span>-78%</span>
                </div>
                <div>
                  <p>SKU#: WH12</p>
                </div>
              </div>
              <div className="main_price">
                <div>
                  <p>
                    M.R.P. : <del>$2999</del>
                  </p>
                </div>
                <div>
                  <span>IN STOCK</span>
                </div>
              </div>
              <div className="product_description">
                <p>{str.slice(0, 200)}....</p>
              </div>
              <div className="product_size">
                <h5>Variant</h5>
                <div className="product_size_flex">
                  {[1, 2, 3, 4, 5].map((e, i) => {
                    return (
                      <div
                        className={
                          color === i
                            ? "product_size_box_active"
                            : "product_size_box"
                        }
                        key={i}
                        onClick={() => handlebackgroundcolor(i)}
                      >
                        <p>XL</p>
                        <p>500 Gm</p>
                        <p>$ 200</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="product_count_flex">
                <div className="product_count_box">
                  <FaMinus
                    style={{ color: "#4B5966", cursor: "pointer" }}
                    onClick={() => {
                      count <= 1 ? setcount(1) : setcount(count - 1);
                    }}
                  />
                  <p>{count}</p>
                  <FaPlus
                    style={{ color: "#4B5966", cursor: "pointer" }}
                    onClick={() => {
                      count >= 10 ? setcount(10) : setcount(count + 1);
                    }}
                  />
                </div>
                <button className="button2"> ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Accordion/>
      <Section/>
    </>
  );
};
export default ProductDetails;
