import "./Service.css";
import { BsTruck } from "react-icons/bs";
import { PiSealPercentLight } from "react-icons/pi";
import { LiaCcAmazonPay } from "react-icons/lia";
import { MdOutlineEco } from "react-icons/md";
const Service = () => {
  return (
    <>
      <div className="service_contaner">
        <div className="service_maxwidth">
            <div className="service_flex">
                <div className="sevice_card">
                   <BsTruck style={{color:"#5CAF90", fontSize:"50px"}}/>
                   <h3>Free Shipping</h3> 
                   <p>Free shipping on all US order or order above $200</p>
                </div>
                <div className="sevice_card">
                   <MdOutlineEco style={{color:"#5CAF90", fontSize:"50px"}}/>
                   <h3>Free Shipping</h3> 
                   <p>Free shipping on all US order or order above $200</p>
                </div>
                <div className="sevice_card">
                   <PiSealPercentLight style={{color:"#5CAF90", fontSize:"50px"}}/>
                   <h3>Free Shipping</h3> 
                   <p>Free shipping on all US order or order above $200</p>
                </div>
                <div className="sevice_card">
                   <LiaCcAmazonPay style={{color:"#5CAF90", fontSize:"50px"}}/>
                   <h3>Free Shipping</h3> 
                   <p>Free shipping on all US order or order above $200</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default Service;
