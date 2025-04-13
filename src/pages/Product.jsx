import Footer from "../componant/footer/Footer";
import Main_header from "../componant/main_header/Main_header";
import Menu from "../componant/menu/Menu";
import Product_list from "../componant/product_list/Product_list";
import Top_header from "../componant/top_header/Top_header";


const Product =()=>{

    return(
        <>
          <Top_header/>
          <Main_header/>
          <Menu/>
          <Product_list/>
          <Footer/>
        </>
    )
}
export default Product;