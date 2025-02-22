import img from "../../assets/image.jpg";
import "./Blog_section.css";

const Blog_section = () => {
  return (
    <>
      <div className="Blog_section_contaner">
        <div className="Blog_section_maxwidth">
          <div className="Blog_section_heading">
            <h2>Latest Blog</h2>
          </div>
          <div className="Blog_section_flex">
            {[1, 2, 3].map((e, i) => {
              return (
                  <div className="Blog_section_card" key={i}>
                    <div>
                      <img src={img} className="Blog_section_image" />
                    </div>
                    <span>Foods</span>
                    <h3>This US States Test Doesn't End Until</h3>
                    <p>
                      Primo in altis pelle alumnae Lorem markdownum obvius in
                      seque opus, est bicorni forte; laeva…
                    </p>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog_section;
