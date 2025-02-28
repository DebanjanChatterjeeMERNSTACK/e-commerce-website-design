import Blog_contant from "../componant/blog_contant/Blog_contant";
import Blog_section from "../componant/blog_section/Blog_section";
import Footer from "../componant/footer/Footer";
import Main_header from "../componant/main-header/Main_header";
import Menu from "../componant/menu/Menu";
import Top_header from "../componant/top-header/Top_header";

const Blog_Details =()=>{

    return(
        <>
          <Top_header/>
          <Main_header/>
          <Menu/>
          <Blog_contant/>
          <Footer/>
        </>
    )
}
export default Blog_Details;