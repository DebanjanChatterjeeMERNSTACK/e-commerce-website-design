import "./Card.css";
import img from "../../assets/2.jpg";
import { FaStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card_image">
          <img
            src={img}
            style={{ width: "100%", height: "180px", borderRadius: "5px",borderBottom:"1px solid rgb(238, 238, 238)" }}
          />
          <span>20%</span>
        </div>
        <div className="card_details">
          <p>Foods</p>
          <h4>Fresh Mango juice pack Fresh Mango juice pack</h4>
          <div className="star_flex">
            {[1, 2, 3, 4, 5].map((e, i) => {
              return (
                <div key={i}>
                  <FaStar style={{ color: "#F8BF87" }} />
                </div>
              );
            })}
          </div>
          <div className="card_price">
            <p className="price_text">$45</p>
            <p>
              <del>$55</del>
            </p>
          </div>
          <div className="card_icon">
            <MdOutlineRemoveRedEye style={{color:"#4B5966",fontSize:"23px"}}/>
            <TbShoppingBagPlus style={{color:"#4B5966",fontSize:"23px"}}/>
            {/* <FaRegHeart style={{color:"#4B5966",fontSize:"23px"}}/> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
