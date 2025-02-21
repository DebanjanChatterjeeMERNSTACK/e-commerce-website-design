import Card from "../componant/card/Card"
import Category from "../componant/category/Category"
import Felx_image from "../componant/flex_image/Felx_image"
import Main_header from "../componant/main-header/Main_header"
import Menu from "../componant/menu/Menu"
import Section from "../componant/section_product/Section"
import Slider from "../componant/slider/Slider"
import Top_header from "../componant/top-header/Top_header"


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
        <Felx_image/>
        <Section/>
        </>
    )
}
export default Home