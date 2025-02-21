import "./Top_header.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Top_header = () => {
  return (
    <>
      <div className="top_header_contaner">
        <div className="top_header_widthmax">
          <div className="top_header_flex">
            <div className="top_header_contant_flex">
              <MdOutlinePhoneInTalk style={{color:"#777"}}/>
              <p>+91 1234567890</p>
            </div>
            <div className="top_header_contant_flex">
              <FaWhatsapp style={{color:"#777"}}/>
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Top_header;
