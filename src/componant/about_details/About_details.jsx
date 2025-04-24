import "./About_details.css";
import img from "../../assets/1.jpg";
import member from "../../assets/4.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

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

const About_details = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
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
        breakpoint: 562, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 450, // Tablets and smaller laptops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 347, // Tablets and smaller laptops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="about_contaner">
        <div className="about_maxwidth">
          <img
            src={img}
            style={{ width: "100%", height: "380px", borderRadius: "10px" }}
          />
          <div className="Blog_section_heading">
            <h2>About Us</h2>
          </div>
          <div className="about_contant">
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. Why do we use
              it? It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like). Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <div className="Blog_section_heading">
            <h2>Team Member</h2>
          </div>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6].map((e, i) => {
              return (
                <div key={i}>
                  <img
                    src={member}
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default About_details;
