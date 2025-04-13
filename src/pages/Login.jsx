import Footer from "../componant/footer/Footer";
import Loginform from "../componant/login/Loginform";
import Main_header from "../componant/main_header/Main_header";
import Menu from "../componant/menu/Menu";
import Top_header from "../componant/top_header/Top_header";

const Login =()=>{

    return(
        <>
          <Top_header/>
          <Main_header/>
          <Menu/>
          <Loginform/>
          <Footer/>
        </>
    )
}
export default Login;