import Cart_details from "../componant/cart_details/Cart_details";
import Footer from "../componant/footer/Footer";
import Main_header from "../componant/main_header/Main_header";
import Menu from "../componant/menu/Menu";
import Top_header from "../componant/top_header/Top_header";

const Cart =()=>{

    return(
        <>
          <Top_header/>
          <Main_header/>
          <Menu/>
          <Cart_details/>
          <Footer/>
        </>
    )
}
export default Cart;