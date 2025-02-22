import "./Category_card.css";
import img from "../../assets/3.jpg";
const Category_card = () => {
  return (
    <>
      <div className="category_card">
        <img src={img} style={{width:"50px", height:"50px" , borderRadius:"50%"}} />
        <p>Fashion & Beauty</p>
      </div>
    </>
  );
};
export default Category_card;
