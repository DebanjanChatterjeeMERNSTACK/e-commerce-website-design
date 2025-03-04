import Accordion from "../accordion_product/Accordion";
import "./Faq_details.css";

const Faq_details = () => {
  return (
    <>
      <div className="product_details_contaner">
        <div className="product_Accordion_maxwidth">
        <div className="Blog_section_heading">
            <h2>FAQ</h2>
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7].map((e) => {
          return (
            <>
              <Accordion />
            </>
          );
        })}
      </div>
    </>
  );
};
export default Faq_details;
