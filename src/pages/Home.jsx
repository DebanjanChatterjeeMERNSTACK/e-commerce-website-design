import Blog_section from "../componant/blog_section/Blog_section"
import Category from "../componant/category/Category"
import Felx_image from "../componant/flex_image/Felx_image"
import Footer from "../componant/footer/Footer"
import Main_header from "../componant/main_header/Main_header"
import Menu from "../componant/menu/Menu"
import Section from "../componant/section_product/Section"
import Service from "../componant/service/Service"
import Slider from "../componant/slider/Slider"
import Top_header from "../componant/top_header/Top_header"


const Home=()=>{
    return(
        <>
        <Top_header/>
        <Main_header/>
        <Menu/>
        <Slider/>
        <Category/>
        <Section/>
        <Felx_image/>
        <Section/>
        <Felx_image/>
        <Section/>
        <Service/>
        <Blog_section/>
        <Footer/>
        </>
    )
}
export default Home