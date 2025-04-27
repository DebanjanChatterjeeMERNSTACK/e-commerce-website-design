import "./Category.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Category_card from "../category_card/Category_card";

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

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 582, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 475, // Tablets and smaller laptops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 362, // Tablets and smaller laptops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <>
      <div className="category_contaner">
        <div className="category_maxwidth">
          <div className="category_flex">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6].map((e, i) => {
                return (
                  <div key={i}>
                    <Category_card />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
