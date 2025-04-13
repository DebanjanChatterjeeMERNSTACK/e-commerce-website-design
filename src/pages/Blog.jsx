import Blog_section from "../componant/blog_section/Blog_section";
import Footer from "../componant/footer/Footer";
import Main_header from "../componant/main_header/Main_header";
import Menu from "../componant/menu/Menu";
import Top_header from "../componant/top_header/Top_header";

const Blog =()=>{

    return(
        <>
          <Top_header/>
          <Main_header/>
          <Menu/>
          <Blog_section/>
          <Footer/>
        </>
    )
}
export default Blog;