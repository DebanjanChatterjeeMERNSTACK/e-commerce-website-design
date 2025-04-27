import "./Blog_hero.css";
// import img from "../../assets/img.jpg"
import img1 from "../../assets/image1.jpg"

const Blog_hero = () => {
  return (
    <>
      <div className="Blog_hero_contaner">
        <div className="Blog_hero_maxwidth">
          <div className="Blog_hero_flex">
            <div>
              <span>Food & Drink</span>
              <h1>The Pleasure of Defying Food Fashions</h1>
            </div>
            <div>
              <img src={img1} style={{ borderRadius:"50%",borderBottom:"10px solid #5CAF90"}} className="blog_image"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog_hero;
