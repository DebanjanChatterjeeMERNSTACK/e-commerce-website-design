import { NavLink } from "react-router-dom";
import Card from "../card/Card";
import "./Searchform.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Searchform = () => {
  return (
    <>
      <div className="search_contaner">
        <div className="seaech_maxwidth">
          <div className="seaech_flex">
            <div>
                <NavLink to={"/"}><button className="button2"><FaArrowLeftLong  style={{fontSize:"25px"}}/></button></NavLink>
            </div>
            <div>
                <input type="text" placeholder="Search Item..." />
            </div>
          </div>
        </div>
      </div>
      <div className="search_contaner_card">
        <div className="search_contaner_card_maxwidth">
          <div className="seaech_flex_card">
            {[1, 2, 3, 4].map((e) => {
              return (
                <div key={e}>
                  <Card />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Searchform;
